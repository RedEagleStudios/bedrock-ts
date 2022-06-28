export interface MCManifest {
  format_version: number
  header: MCManifestHeader
  modules: MCManifestModules[]
  dependencies: MCManifestDependencies[]
}

export interface MCManifestHeader {
  description: string
  name: string
  uuid: string
  version: number[]
  min_engine_version?: number[]
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

export interface MCManifestUUIDs {
  bpHeader: string
  rpHeader: string
  bpModule: string
  rpModule: string
}

type MCManifestType = "data" | "resources"
