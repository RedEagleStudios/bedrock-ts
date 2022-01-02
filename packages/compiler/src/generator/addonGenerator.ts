import FastGlob from "fast-glob"
import { copyFileSync, existsSync, mkdirSync, rmSync } from "fs"
import { MCAddon } from "../../bedrock/minecraft/MCAddon"
import { recursive } from "../../constants/fsOptions"
import { generateManifest } from "../utils/generateManifest"
import { writeJson } from "../utils/writeJson"

export class AddonGenerator {
	private cache: string
	private pathBP: string
	private pathRP: string

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
		this.writeEntities()
	}

	private writeManifests() {
		const bpManifestCache = `${this.cache}/manifest-bp.json`
		const rpManifestCache = `${this.cache}/manifest-rp.json`
		if (!existsSync(bpManifestCache) || !existsSync(rpManifestCache)) {
			const { bpManifest, rpManifest } = generateManifest()
			mkdirSync(this.cache, recursive)

			writeJson(bpManifestCache, bpManifest)
			writeJson(rpManifestCache, rpManifest)
		}
		copyFileSync(bpManifestCache, `${this.pathBP}/manifest.json`)
		copyFileSync(rpManifestCache, `${this.pathRP}/manifest.json`)
	}

	private writeEntities() {
		const bpEntityPath = mkdirSync(`${this.pathBP}/entities`, recursive)
		const rpEntityPath = mkdirSync(`${this.pathRP}/entity`, recursive)

		this.addon.entities.forEach((entity) => {
			const identifier = entity.identifier.removeNamespace()

			writeJson(`${bpEntityPath}/${identifier}.json`, entity.getBP())
			writeJson(`${rpEntityPath}/${identifier}.json`, entity.getRP())
		})
	}
}
