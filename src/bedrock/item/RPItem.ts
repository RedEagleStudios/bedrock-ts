import { Identifier } from "../../bedrock/shared/Identifier"

type FormatVersion = "1.10.0"

export type RPItemCategory = "Equipment" | "Items" | "Nature"

export interface RPItemDescription {
  identifier: Identifier
  category?: RPItemCategory
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
