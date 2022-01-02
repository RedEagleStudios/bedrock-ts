import { randomUUID } from "crypto"
import { MCManifest } from "../../bedrock/manifest/MCManifest"

export function generateManifest() {
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
	return { bpManifest, rpManifest }
}
