import { Identifier } from "../identifier/Identifier"

type FormatVersion = "1.10.0"

export type RPEntity = {
	formatVersion: FormatVersion
	MCClientEntity: MCClientEntity
}

export type MCClientEntity = {
	description: RPDescription
}

export type RPDescription = {
	identifier: Identifier
	materials?: string[]
	textures?: string[]
	geometry?: string
}
