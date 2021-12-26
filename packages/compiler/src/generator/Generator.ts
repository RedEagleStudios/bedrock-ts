import { MCAddon } from "../../bedrock/minecraft/MCAddon"
import { mkDirOptions } from "../../constants/mkDirOptions"
import "../extensions/string"
import { fsMkDir, fsWriteFile } from "../utils/fs"

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

	public async generate() {
		await fsMkDir(`${this.pathBP}`, mkDirOptions)
		await fsMkDir(`${this.pathRP}`, mkDirOptions)

		this.generateEntities()
	}

	private generateEntities() {
		fsMkDir(`${this.pathBP}/entities`, mkDirOptions)
		fsMkDir(`${this.pathRP}/entity`, mkDirOptions)

		const entities = this.addon.entities
		entities.forEach((entity) => {
			const identifier = entity.identifier.removeNamespace()
			const bpJson = JSON.stringify(entity.createBP(), null, 2).formatKey()
			fsWriteFile(`${this.pathBP}/entities/${identifier}.json`, bpJson)

			const rpJson = JSON.stringify(entity.createRP(), null, 2).formatKey()
			fsWriteFile(`${this.pathRP}/entity/${identifier}.json`, rpJson)
		})
	}
}
