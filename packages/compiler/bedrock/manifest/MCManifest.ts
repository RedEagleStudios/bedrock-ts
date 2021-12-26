export interface MCManifest {
	formatVersion: number
	header: MCManifestHeader
	modules: MCManifestModules[]
	dependencies: MCManifestDependencies[]
}

export interface MCManifestHeader {
	description: string
	name: string
	uuid: string
	version: number[]
	minEngineVersion?: number[]
}

export interface MCManifestModules {
	type: MCManifestType
	uuid: string
	version: number[]
}

export interface MCManifestDependencies {
	uuid: string
	version: number[]
}

type MCManifestType = "data" | "resources"
