import { existsSync, mkdirSync, rmSync } from "fs"
import { MCAddon } from "../../bedrock/minecraft/MCAddon"
import { recursive } from "../../constants/fsOptions"
import { writeJson } from "../utils/writeJson"
import { manifestGenerator } from "./manifestGenerator"

export class AddonGenerator {
	private pathBP: string
	private pathRP: string

	constructor(private addon: MCAddon) {
		this.pathBP = `./out/${addon.packName} BP`
		this.pathRP = `./out/${addon.packName} RP`
	}

	public generate() {
		// TODO - Find a way to only delete the files that are not in the addon
		;[this.pathBP, this.pathRP].map((e) => {
			if (existsSync(e)) {
				rmSync(e, recursive)
			}
			mkdirSync(e, recursive)
		})

		this.writeManifests()
		this.writeEntities()
	}

	private writeManifests() {
		const { bpManifest, rpManifest } = manifestGenerator()
		writeJson(`${this.pathBP}/manifest.json`, bpManifest)
		writeJson(`${this.pathRP}/manifest.json`, rpManifest)
	}

	private writeEntities() {
		const bpEntityPath = mkdirSync(`${this.pathBP}/entities`, recursive)
		const rpEntityPath = mkdirSync(`${this.pathRP}/entity`, recursive)

		this.addon.entities.forEach((entity) => {
			const identifier = entity.identifier.removeNamespace()

			writeJson(`${bpEntityPath}/${identifier}.json`, entity.createBP())
			writeJson(`${rpEntityPath}/${identifier}.json`, entity.createRP())
		})
	}
}
