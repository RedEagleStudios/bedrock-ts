import { existsSync, mkdirSync, rmSync, writeFileSync } from "fs"
import { MCAddon } from "../../bedrock/minecraft/MCAddon"
import { recursive } from "../../constants/fsOptions"
import "../extensions/string"

export class Generator {
	private addon: MCAddon

	private name: string
	private pathBP: string
	private pathRP: string

	constructor(addon: MCAddon) {
		this.addon = addon

		this.name = addon.manifest.name
		this.pathBP = `./out/${this.name} BP`
		this.pathRP = `./out/${this.name} RP`
	}

	public generate() {
		// TODO - Find a way to only delete the files that are not in the addon
		;[this.pathBP, this.pathRP].map((e) => {
			if (existsSync(e)) {
				rmSync(e, recursive)
			}
			mkdirSync(e, recursive)
		})

		this.generateEntities()
	}

	private generateEntities() {
		const bpEntityPath = mkdirSync(`${this.pathBP}/entities`, recursive)
		const rpEntityPath = mkdirSync(`${this.pathRP}/entity`, recursive)

		this.addon.entities.forEach((entity) => {
			const identifier = entity.identifier.removeNamespace()

			const bpJson = JSON.stringify(entity.createBP(), null, 2).formatKey()
			writeFileSync(`${bpEntityPath}/${identifier}.json`, bpJson)

			const rpJson = JSON.stringify(entity.createRP(), null, 2).formatKey()
			writeFileSync(`${rpEntityPath}/${identifier}.json`, rpJson)
		})
	}
}
