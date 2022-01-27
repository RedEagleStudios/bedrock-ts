import FastGlob from "fast-glob"
import { copyFileSync, existsSync, mkdirSync, rmSync } from "fs"
import { MCAddon } from "../bedrock/addon/MCAddon"
import { ItemTexture, TextureData } from "../bedrock/texture/ItemTexture"
import { recursive } from "../constants/fsOptions"
import { generateManifest } from "../utils/generateManifest"
import { writeJson } from "../utils/writeJson"

export class AddonGenerator {
	private cache: string
	private pathBP: string
	private pathRP: string
	private textureData: TextureData = {}

	constructor(private addon: MCAddon) {
		this.cache = `./out/.${addon.packName}`
		this.pathBP = `./out/${addon.packName} BP`
		this.pathRP = `./out/${addon.packName} RP`
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
		this.writeEntities()
		this.writeItems()
		this.writeRecipes()
		this.writeItemTextures()
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

		this.addon.animations.forEach((animation) => {
			writeJson(`${bpAnimationPath}/${animation.fileName}.json`, animation.createAnimation())
		})
	}

	private writeAnimControllers() {
		const bpControllerPath = mkdirSync(`${this.pathBP}/animation_controllers`, recursive)

		this.addon.animControllers.forEach((controller) => {
			writeJson(`${bpControllerPath}/${controller.fileName}.json`, controller.createAnimController())
		})
	}

	private writeEntities() {
		const bpEntityPath = mkdirSync(`${this.pathBP}/entities`, recursive)
		const rpEntityPath = mkdirSync(`${this.pathRP}/entity`, recursive)

		this.addon.entities.forEach((entity) => {
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
					this.textureData = {
						...this.textureData,
						[eggTexture]: {
							textures: "textures/items/" + filePath,
						},
					}
				}
			}
		})
	}

	private writeItems() {
		const bpItemPath = mkdirSync(`${this.pathBP}/item`, recursive)
		const rpItemPath = mkdirSync(`${this.pathRP}/item`, recursive)

		this.addon.items.forEach((item) => {
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
				this.textureData = {
					...this.textureData,
					[icon]: {
						textures: "textures/items/" + filePath,
					},
				}
			}
		})
	}

	private writeRecipes() {
		const recipePath = mkdirSync(`${this.pathBP}/recipes`, recursive)

		this.addon.recipes.forEach((recipe) => {
			const fileName = recipe.identifier.removeNamespace()
			writeJson(`${recipePath}/${fileName}.json`, recipe.createRecipe())
		})
	}

	private writeItemTextures() {
		const itemTexture: ItemTexture = {
			resource_pack_name: "vanilla",
			texture_data: this.textureData,
			texture_name: "atlas.items",
		}
		writeJson(`${this.pathRP}/textures/item_texture.json`, itemTexture)
	}
}
