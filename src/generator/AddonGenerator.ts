import { existsSync, readFileSync, rmdir, rmSync } from "fs"
import { outputFileSync } from "fs-extra"
import transform from "lodash.transform"
import { dirname, join } from "path/posix"
import { MCAddon } from "../bedrock/addon/MCAddon"
import { Blocks } from "../bedrock/block/Blocks"
import { ItemTexture } from "../bedrock/texture/ItemTexture"
import { TerrainTexture } from "../bedrock/texture/TerrainTexture"
import { TextureData } from "../bedrock/texture/TextureData"
import { BPAnimationBuilder } from "../builder/animation/BPAnimationBuilder"
import { BPAnimControllerBuilder } from "../builder/animation_controller/BPAnimControllerBuilder"
import { BPBlockBuilder } from "../builder/block/BPBlockBuilder"
import { RPBlockBuilder } from "../builder/block/RPBlockBuilder"
import { BPEntityBuilder } from "../builder/entity/BPEntityBuilder"
import { RPEntityBuilder } from "../builder/entity/RPEntityBuilder"
import { BPItemBuilder } from "../builder/item/BPItemBuilder"
import { RPItemBuilder } from "../builder/item/RPItemBuilder"
import { LangBuilder } from "../builder/lang/LangBuilder"
import { CACHE_PATH } from "../constants/paths"
import { assign } from "../utils/assign"
import { generateManifest } from "./generateManifest"

export class AddonGenerator {
	private pathBP: string
	private pathRP: string

	private bpLang: LangBuilder
	private rpLang: LangBuilder

	private blocksRP: Blocks = {
		format_version: [1, 1, 0],
	}
	private itemTextureData: TextureData = {}
	private terrainTextureData: TextureData = {}

	constructor(private addon: MCAddon) {
		this.pathBP = `./out/${addon.packName} BP`
		this.pathRP = `./out/${addon.packName} RP`

		this.bpLang = new LangBuilder(addon.packName, "Behavior")
		this.rpLang = new LangBuilder(addon.packName, "Resource")
	}

	public generate() {
		this.writeManifests()
		this.writeAnimations()
		this.writeAnimControllers()
		this.writeBlocks()
		this.writeDialogues()
		this.writeEntities()
		this.writeLootTables()
		this.writeItems()
		this.writeRecipes()
		this.writeTrading()
		this.writeItemTextures()
		this.writeTerrainTexture()
		this.writeLangFile()
		this.cleanup()
	}

	private writeManifests() {
		const { bpManifest, rpManifest } = generateManifest(this.addon.uuids)
		writeJson(`${this.pathBP}/manifest.json`, bpManifest)
		writeJson(`${this.pathRP}/manifest.json`, rpManifest)
	}

	private writeAnimations() {
		const bpAnimationPath = `${this.pathBP}/animations`

		this.addon.animations?.forEach((animation) => {
			const fileName = join(animation.dir ?? "", animation.fileName)
			const bpAnim = animation.createBP(new BPAnimationBuilder(animation.fileName))
			writeJson(`${bpAnimationPath}/${fileName}.animation.json`, bpAnim)
		})
	}

	private writeAnimControllers() {
		const bpControllerPath = `${this.pathBP}/animation_controllers`

		this.addon.animControllers?.forEach((controller) => {
			const fileName = join(controller.dir ?? "", controller.fileName)
			const bpController = controller.createBP(new BPAnimControllerBuilder(controller.fileName))
			writeJson(`${bpControllerPath}/${fileName}.controller.json`, bpController)
		})
	}

	private writeBlocks() {
		const bpBlockPath = `${this.pathBP}/blocks`

		this.addon.blocks?.forEach((block) => {
			const identifier = block.identifier
			const filePath = identifier.toFilePath(block.dir)

			const blockBP = block.createBP(new BPBlockBuilder(identifier, block.dir))
			writeJson(`${bpBlockPath}/${filePath}.json`, blockBP)

			const blockRP = block.createRP(new RPBlockBuilder(identifier))
			assign(this.blocksRP, {
				[identifier]: blockRP,
			})

			const blockTextures = blockRP.textures
			if (typeof blockTextures === "string") {
				assign(this.terrainTextureData, {
					[blockTextures]: {
						textures: join("textures/blocks/", block.dir ?? "", blockTextures),
					},
				})
			} else {
				Object.entries(blockTextures).forEach(([, texture]) => {
					assign(this.terrainTextureData, {
						[texture]: {
							textures: join("textures/blocks/", block.dir ?? "", texture),
						},
					})
				})
			}
			this.rpLang.addBlock(block)
		})
	}

	private writeDialogues() {
		const dialoguePath = `${this.pathBP}/dialogue`

		this.addon.dialogues?.forEach((dialogue) => {
			const fileName = join(dialogue.dir ?? "", dialogue.fileName)
			writeJson(`${dialoguePath}/${fileName}.dialogue.json`, dialogue.create())
		})
	}

	private writeEntities() {
		const bpEntityPath = `${this.pathBP}/entities`
		const rpEntityPath = `${this.pathRP}/entity`

		this.addon.entities?.forEach((entity) => {
			const identifier = entity.identifier
			const filePath = identifier.toFilePath(entity.dir)
			if (entity.createBP) {
				const entityBP = entity.createBP(new BPEntityBuilder(identifier))
				writeJson(`${bpEntityPath}/${filePath}.json`, entityBP)
			}
			if (entity.createRP) {
				const entityRP = entity.createRP(new RPEntityBuilder(identifier, entity.dir))
				writeJson(`${rpEntityPath}/${filePath}.json`, entityRP)

				const eggTexture = entityRP.MCClientEntity.description.spawn_egg?.texture
				if (eggTexture) {
					assign(this.itemTextureData, {
						[eggTexture]: {
							textures: join("textures/items/spawn_eggs/", entity.dir ?? "", eggTexture),
						},
					})
				}
			}
			this.rpLang.addEntity(entity)
		})
	}

	private writeLootTables() {
		const lootTablePath = `${this.pathBP}/loot_tables`

		this.addon.loot_tables?.forEach((loot_table) => {
			const fileName = join(loot_table.dir ?? "", loot_table.fileName)
			writeJson(`${lootTablePath}/${fileName}.json`, loot_table.create())
		})
	}

	private writeItems() {
		const bpItemPath = `${this.pathBP}/items`
		const rpItemPath = `${this.pathRP}/items`

		this.addon.items?.forEach((item) => {
			const identifier = item.identifier
			const filePath = identifier.toFilePath(item.dir)
			if (item.createBP) {
				const itemBP = item.createBP(new BPItemBuilder(identifier))
				writeJson(`${bpItemPath}/${filePath}.json`, itemBP)
			}
			if (item.createRP) {
				const itemRP = item.createRP(new RPItemBuilder(identifier))
				writeJson(`${rpItemPath}/${filePath}.json`, itemRP)

				const icon = itemRP.MCItem.components.MCIcon
				if (icon) {
					assign(this.itemTextureData, {
						[icon]: {
							textures: join("textures/items", item.dir ?? "", icon),
						},
					})
				}
			}
			this.rpLang.addItem(item)
		})
	}

	private writeRecipes() {
		const recipePath = `${this.pathBP}/recipes`

		this.addon.recipes?.forEach((recipe) => {
			const fileName = recipe.identifier.toFilePath(recipe.dir)
			writeJson(`${recipePath}/${fileName}.json`, recipe.create())
		})
	}

	private writeTrading() {
		const tradingPath = `${this.pathBP}/trading`

		this.addon.tradings?.forEach((trading) => {
			const fileName = join(trading.dir ?? "", trading.fileName)
			writeJson(`${tradingPath}/${fileName}.json`, trading.create())
		})
	}

	private writeItemTextures() {
		const itemTexture: ItemTexture = {
			resource_pack_name: "vanilla",
			texture_data: this.itemTextureData,
			texture_name: "atlas.items",
		}
		writeJson(`${this.pathRP}/textures/item_texture.json`, itemTexture)
	}

	private writeTerrainTexture() {
		const terrainTexture: TerrainTexture = {
			resource_pack_name: "vanilla",
			texture_data: this.terrainTextureData,
			texture_name: "atlas.terrain",
		}
		writeJson(`${this.pathRP}/textures/terrain_texture.json`, terrainTexture)
		writeJson(`${this.pathRP}/blocks.json`, this.blocksRP)
	}

	private writeLangFile() {
		const bpLangPath = `${this.pathBP}/texts`
		const rpLangPath = `${this.pathRP}/texts`

		outputFileSync(`${bpLangPath}/en_US.lang`, this.bpLang.build())
		outputFileSync(`${bpLangPath}/languages.json`, `["en_US"]`)
		outputFileSync(`${rpLangPath}/en_US.lang`, this.rpLang.build())
		outputFileSync(`${rpLangPath}/languages.json`, `["en_US"]`)
	}

	private cleanup() {
		if (!existsSync(CACHE_PATH)) {
			outputFileSync(CACHE_PATH, cache.join("\n"))
			return
		}
		const old = readFileSync(CACHE_PATH).toString().split("\n")
		old.filter((v) => !cache.includes(v)).forEach((v) => {
			rmSync(v)
			rmdir(dirname(v), () => undefined)
		})
		outputFileSync(CACHE_PATH, cache.join("\n"))
	}
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function writeJson(path: string, object: Record<string, any>): void {
	object = transform(object, function iteratee(result, value, key) {
		if (typeof key === "string") key = formatKey(key)
		if (typeof value === "object") value = transform(value, iteratee)
		result[key] = value
		return result
	})
	outputFileSync(path, JSON.stringify(object, null, 2) + "\n")
	cache.push(path)
}

function formatKey(key: string): string {
	if (key.indexOf("MC") === -1) return key
	key = key.substring(2)
	return (
		"minecraft:" +
		key
			.replace("_", ".")
			.replace(/([a-z])([A-Z])/g, "$1_$2")
			.toLowerCase()
	)
}

const cache: string[] = []
