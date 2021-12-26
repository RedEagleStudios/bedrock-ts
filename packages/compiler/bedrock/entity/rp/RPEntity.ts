import { Identifier } from "../Identifier"

export type RPEntity = {
	formatVersion: FormatVersion
	MCClientEntity: MCClientEntity
}

type FormatVersion = "1.10.0"

export type MCClientEntity = {
	description: RPDescription
}

export type RPDescription = {
	identifier: Identifier
	materials?: string[]
	textures?: string[]
	geometry?: string
}
