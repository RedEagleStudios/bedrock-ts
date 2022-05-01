import { Identifier } from "../../bedrock/shared/Identifier"

type FormatVersion = "1.10.0"

export interface RPItemDescription {
	identifier: Identifier
	category?: "Equipment" | "Items" | "Nature"
}

export interface RPItemComponents {
	MCIcon?: string
	MCRenderOffsets?: string
	MCUseAnimation?: "drink" | "eat" | "none"
}

export interface MCItemRP {
	description: RPItemDescription
	components: RPItemComponents
}

export interface RPItem {
	format_version: FormatVersion
	MCItem: MCItemRP
}
