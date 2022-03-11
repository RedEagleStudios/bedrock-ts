import { existsSync, mkdirSync, readdirSync, rmSync } from "fs"
import { copySync } from "fs-extra"
import { join } from "path/posix"
import { performance } from "perf_hooks"
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
import { recursive } from "../constants/fsOptions"
import { assign } from "../utils/assign"
import { writeFile } from "../utils/writeFile"
import { writeJson } from "../utils/writeJson"
import { generateManifest } from "./generateManifest"

export class AddonGenerator {
	private cache: string
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
		this.cache = `./out/.${addon.packName}`
		this.pathBP = `./out/${addon.packName} BP`
		this.pathRP = `./out/${addon.packName} RP`

		this.bpLang = new LangBuilder(addon.packName, "Behavior")
		this.rpLang = new LangBuilder(addon.packName, "Resource")
	}

	public generate() {
		const startTime = performance.now()
		this.initialize()
		this.writeManifests()
		this.writeAnimations()
		this.writeAnimControllers()
		this.writeBlocks()
		this.writeEntities()
		this.writeLootTables()
		this.writeItems()
		this.writeRecipes()
		this.writeItemTextures()
		this.writeTerrainTexture()
		this.writeLangFile()
		const endTime = performance.now()
		console.log(`Build finished in ${(endTime - startTime).toPrecision(5)}ms`)
	}

	private initialize() {
		const paths = [
			[this.pathBP, `./src/assets/BP`],
			[this.pathRP, `./src/assets/RP`],
		]
		paths.map(([dest, assets]) => {
			if (existsSync(dest)) {
				readdirSync(dest).forEach((d) => rmSync(`${dest}/${d}`, recursive))
			} else {
				mkdirSync(dest, recursive)
			}

			if (existsSync(assets)) {
				readdirSync(assets).forEach((d) => copySync(`${assets}/${d}`, `${dest}/${d}`))
			}
		})
	}

	private writeManifests() {
		const bpManifestCache = `${this.cache}/manifest-bp.json`
		const rpManifestCache = `${this.cache}/manifest-rp.json`
		if (!existsSync(bpManifestCache) || !existsSync(rpManifestCache)) {
			console.log("Manifest cache not found, generating a new manifest")

			const { bpManifest, rpManifest } = generateManifest(this.addon.uuids)
			mkdirSync(this.cache, recursive)

			writeJson(bpManifestCache, bpManifest)
			writeJson(rpManifestCache, rpManifest)
		}
		copySync(bpManifestCache, `${this.pathBP}/manifest.json`)
		copySync(rpManifestCache, `${this.pathRP}/manifest.json`)
	}

	private writeAnimations() {
		const bpAnimationPath = `${this.pathBP}/animations`

		this.addon.animations?.forEach((animation) => {
			const name = animation.name
			const bpAnim = animation.createBP(new BPAnimationBuilder(name))
			writeJson(`${bpAnimationPath}/${name}.animation.json`, bpAnim)
		})
	}

	private writeAnimControllers() {
		const bpControllerPath = `${this.pathBP}/animations`

		this.addon.animControllers?.forEach((controller) => {
			const name = controller.name
			const bpController = controller.createBP(new BPAnimControllerBuilder(name))
			writeJson(`${bpControllerPath}/${name}.controller.json`, bpController)
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
			this.rpLang.addBlock(identifier)
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
			this.rpLang.addEntity(identifier)
		})
	}

	private writeLootTables() {
		const lootTablePath = `${this.pathBP}/loot_tables`

		this.addon.loot_tables?.forEach((loot_table) => {
			writeJson(`${lootTablePath}/${loot_table.fileName}.json`, loot_table.createLootTable())
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
			this.rpLang.addItem(identifier)
		})
	}

	private writeRecipes() {
		const recipePath = `${this.pathBP}/recipes`

		this.addon.recipes?.forEach((recipe) => {
			const fileName = recipe.identifier.toFilePath(recipe.dir)
			writeJson(`${recipePath}/${fileName}.json`, recipe.createRecipe())
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

		writeFile(`${bpLangPath}/en_US.lang`, this.bpLang.build())
		writeFile(`${bpLangPath}/languages.json`, `["en_US"]`)
		writeFile(`${rpLangPath}/en_US.lang`, this.rpLang.build())
		writeFile(`${rpLangPath}/languages.json`, `["en_US"]`)
	}
}
