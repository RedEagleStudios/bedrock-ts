import { randomUUID } from "crypto"
import { existsSync, mkdirSync, rmSync } from "fs"
import { MCManifest } from "../../bedrock/manifest/MCManifest"
import { MCAddon } from "../../bedrock/minecraft/MCAddon"
import { recursive } from "../../constants/fsOptions"
import { writeJson } from "../utils/writeJson"

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

		this.generateManifest()
		this.generateEntities()
	}

	private generateEntities() {
		const bpEntityPath = mkdirSync(`${this.pathBP}/entities`, recursive)
		const rpEntityPath = mkdirSync(`${this.pathRP}/entity`, recursive)

		this.addon.entities.forEach((entity) => {
			const identifier = entity.identifier.removeNamespace()

			writeJson(`${bpEntityPath}/${identifier}.json`, entity.createBP())
			writeJson(`${rpEntityPath}/${identifier}.json`, entity.createRP())
		})
	}

	private generateManifest() {
		const bpId = randomUUID()
		const rpId = randomUUID()
		const bpModuleId = randomUUID()
		const rpModuleuid = randomUUID()
		const bpManifest: MCManifest = {
			formatVersion: 2,
			header: {
				name: "pack.name",
				description: "pack.description",
				uuid: bpId,
				version: [1, 0, 0],
				minEngineVersion: [1, 16, 0],
			},
			modules: [
				{
					type: "data",
					uuid: bpModuleId,
					version: [1, 0, 0],
				},
			],
			dependencies: [
				{
					uuid: rpId,
					version: [1, 0, 0],
				},
			],
		}
		const rpManifest: MCManifest = {
			formatVersion: 2,
			header: {
				name: "pack.name",
				description: "pack.description",
				uuid: rpId,
				version: [1, 0, 0],
				minEngineVersion: [1, 16, 0],
			},
			modules: [
				{
					type: "resources",
					uuid: rpModuleuid,
					version: [1, 0, 0],
				},
			],
			dependencies: [
				{
					uuid: bpId,
					version: [1, 0, 0],
				},
			],
		}
		writeJson(`${this.pathBP}/manifest.json`, bpManifest)
		writeJson(`${this.pathRP}/manifest.json`, rpManifest)
	}
}
