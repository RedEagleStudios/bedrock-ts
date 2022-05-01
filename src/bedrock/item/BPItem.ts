import { Identifier } from "../../bedrock/shared/Identifier"
import { BPItemComponents } from "./components"

type FormatVersion = "1.16.0"

export interface BPItemDescription {
	identifier: Identifier
	is_experimental?: boolean
}

export interface MCItemBP {
	description: BPItemDescription
	components: BPItemComponents
}

export interface BPItem {
	format_version: FormatVersion
	MCItem: MCItemBP
}
