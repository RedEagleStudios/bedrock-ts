import { Identifier } from "../../bedrock/keys/Identifier"

type FormatVersion = "1.10.0"

export interface RPItemDescription {
	identifier: Identifier
	category?: string
}

export interface RPItemComponents {
	MCIcon: string
	MCRenderOffsets?: string
}

export interface MCItemRP {
	description: RPItemDescription
	components?: RPItemComponents
}

export interface RPItem {
	format_version: FormatVersion
	MCItem: MCItemRP
}
