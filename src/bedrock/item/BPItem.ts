import { Identifier } from "../../bedrock/keys/Identifier"
import { BPItemComponents } from "./components"

type FormatVersion = "1.16.0"

export interface BPItemDescription {
	identifier: Identifier
	category?: string
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