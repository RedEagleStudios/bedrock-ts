import { randomUUID } from "crypto"
import { MCManifest, MCManifestUUIDs } from "../bedrock/manifest/MCManifest"

export function generateManifest(uuids?: MCManifestUUIDs) {
	if (!uuids) {
		uuids = {
			bpHeader: randomUUID(),
			rpHeader: randomUUID(),
			bpModule: randomUUID(),
			rpModule: randomUUID(),
		}
		console.log("Paste this in your MCAddon to save UUID")
		console.log("uuids: " + JSON.stringify(uuids, null, 2))
	}
	const bpManifest: MCManifest = {
		format_version: 2,
		header: {
			name: "pack.name",
			description: "pack.description",
			uuid: uuids.bpHeader,
			version: [1, 0, 0],
			min_engine_version: [1, 16, 0],
		},
		modules: [
			{
				type: "data",
				uuid: uuids.bpModule,
				version: [1, 0, 0],
			},
		],
		dependencies: [
			{
				uuid: uuids.rpHeader,
				version: [1, 0, 0],
			},
		],
	}
	const rpManifest: MCManifest = {
		format_version: 2,
		header: {
			name: "pack.name",
			description: "pack.description",
			uuid: uuids.rpHeader,
			version: [1, 0, 0],
			min_engine_version: [1, 16, 0],
		},
		modules: [
			{
				type: "resources",
				uuid: uuids.rpModule,
				version: [1, 0, 0],
			},
		],
		dependencies: [
			{
				uuid: uuids.bpHeader,
				version: [1, 0, 0],
			},
		],
	}
	return { bpManifest, rpManifest }
}
