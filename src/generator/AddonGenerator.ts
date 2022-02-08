import FastGlob from "fast-glob"
import { copyFileSync, existsSync, mkdirSync, rmSync, writeFileSync } from "fs"
import { MCAddon } from "../bedrock/addon/MCAddon"
import { Blocks } from "../bedrock/block/Blocks"
import { ItemTexture } from "../bedrock/texture/ItemTexture"
import { TerrainTexture } from "../bedrock/texture/TerrainTexture"
import { TextureData } from "../bedrock/texture/TextureData"
import { LangBuilder } from "../builder/lang/LangBuilder"
import { recursive } from "../constants/fsOptions"
import { generateManifest } from "../utils/generateManifest"
import { writeJson } from "../utils/writeJson"

export class AddonGenerator {
	private cache: string
	private pathBP: string
	private pathRP: string

	private bpLang: LangBuilder
	private rpLang: LangBuilder

	private blocks: Blocks = {
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
		;[this.pathBP, this.pathRP].map((e) => {
			if (existsSync(e)) {
				FastGlob.sync(`${e}/*`, {
					deep: 1,
					onlyDirectories: true,
				}).forEach((path) => rmSync(path, recursive))
			} else {
				mkdirSync(e, recursive)
			}
		})

		this.writeManifests()
		this.writeAnimations()
		this.writeAnimControllers()
		this.writeBlocks()
		this.writeEntities()
		this.writeItems()
		this.writeRecipes()
		this.writeItemTextures()
		this.writeTerrainTexture()
		this.writeLangFile()
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
		copyFileSync(bpManifestCache, `${this.pathBP}/manifest.json`)
		copyFileSync(rpManifestCache, `${this.pathRP}/manifest.json`)
	}

	private writeAnimations() {
		const bpAnimationPath = mkdirSync(`${this.pathBP}/animations`, recursive)

		this.addon.animations?.forEach((animation) => {
			writeJson(`${bpAnimationPath}/${animation.fileName}.json`, animation.createAnimation())
		})
	}

	private writeAnimControllers() {
		const bpControllerPath = mkdirSync(`${this.pathBP}/animation_controllers`, recursive)

		this.addon.animControllers?.forEach((controller) => {
			writeJson(`${bpControllerPath}/${controller.fileName}.json`, controller.createAnimController())
		})
	}

	private writeBlocks() {
		const bpBlockPath = mkdirSync(`${this.pathBP}/blocks`, recursive) as string

		this.addon.blocks?.forEach((block) => {
			const blockBP = block.createBP()
			const identifier = blockBP.MCBlock.description.identifier

			const filePath = block.customFilePath ?? identifier.toFilePath()
			writeJson(`${bpBlockPath}/${filePath}.json`, blockBP)

			const blockRP = block.createRP()
			const blockTextures = blockRP.textures
			if (typeof blockTextures === "string") {
				this.terrainTextureData = {
					...this.terrainTextureData,
					[blockTextures]: {
						textures: "textures/blocks/" + blockTextures,
					},
				}
			} else {
				Object.entries(blockTextures).forEach(([, texture]) => {
					this.terrainTextureData = {
						...this.terrainTextureData,
						[texture]: {
							textures: "textures/blocks/" + texture,
						},
					}
				})
			}
			this.blocks = {
				...this.blocks,
				[identifier]: blockRP,
			}
			this.rpLang.addBlock(identifier)
		})
	}

	private writeEntities() {
		const bpEntityPath = mkdirSync(`${this.pathBP}/entities`, recursive)
		const rpEntityPath = mkdirSync(`${this.pathRP}/entity`, recursive)

		this.addon.entities?.forEach((entity) => {
			if (entity.createBP) {
				const entityBP = entity.createBP()
				const filePath = entity.customFilePath ?? entityBP.MCEntity.description.identifier.toFilePath()
				writeJson(`${bpEntityPath}/${filePath}.json`, entityBP)
			}
			if (entity.createRP) {
				const entityRP = entity.createRP()
				const filePath = entity.customFilePath ?? entityRP.MCClientEntity.description.identifier.toFilePath()
				writeJson(`${rpEntityPath}/${filePath}.json`, entityRP)

				const eggTexture = entityRP.MCClientEntity.description.spawn_egg?.texture
				if (eggTexture) {
					this.itemTextureData = {
						...this.itemTextureData,
						[eggTexture]: {
							textures: "textures/items/" + filePath,
						},
					}
				}
				this.rpLang.addEntity(entityRP.MCClientEntity.description.identifier)
			}
		})
	}

	private writeItems() {
		const bpItemPath = mkdirSync(`${this.pathBP}/item`, recursive)
		const rpItemPath = mkdirSync(`${this.pathRP}/item`, recursive)

		this.addon.items?.forEach((item) => {
			if (item.createBP) {
				const itemBP = item.createBP()
				const filePath = item.customFilePath ?? itemBP.MCItem.description.identifier.toFilePath()
				writeJson(`${bpItemPath}/${filePath}.json`, itemBP)
			}
			if (item.createRP) {
				const itemRP = item.createRP()
				const filePath = item.customFilePath ?? itemRP.MCItem.description.identifier.toFilePath()
				writeJson(`${rpItemPath}/${filePath}.json`, itemRP)

				const icon = itemRP.MCItem.components.MCIcon
				this.itemTextureData = {
					...this.itemTextureData,
					[icon]: {
						textures: "textures/items/" + icon,
					},
				}
				this.rpLang.addItem(itemRP.MCItem.description.identifier)
			}
		})
	}

	private writeRecipes() {
		const recipePath = mkdirSync(`${this.pathBP}/recipes`, recursive)

		this.addon.recipes?.forEach((recipe) => {
			const fileName = recipe.identifier.removeNamespace()
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
		writeJson(`${this.pathRP}/blocks.json`, this.blocks)
	}

	private writeLangFile() {
		const bpLangPath = mkdirSync(`${this.pathBP}/texts`, recursive)
		const rpLangPath = mkdirSync(`${this.pathRP}/texts`, recursive)

		writeFileSync(`${bpLangPath}/en_US.lang`, this.bpLang.build())
		writeFileSync(`${bpLangPath}/languages.json`, `["en_US"]`)
		writeFileSync(`${rpLangPath}/en_US.lang`, this.rpLang.build())
		writeFileSync(`${rpLangPath}/languages.json`, `["en_US"]`)
	}
}
