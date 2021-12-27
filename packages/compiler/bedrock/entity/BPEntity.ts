import { Identifier } from "../identifier/Identifier"
import { Components } from "./components"

export type BPEntity = {
	formatVersion: FormatVersion
	MCEntity: MCEntity
}

type FormatVersion = "1.16.0" | "1.17.0"

export type MCEntity = {
	description: BPDescription
	componentGroups?: ComponentGroups
	components?: Components
	events?: Events
}

export type BPDescription = {
	identifier: Identifier
	isSpawnable?: boolean
	isSummonable?: boolean
	isExperimental?: boolean
}

// * Temporary workaround to ignore component group keys
export type ComponentGroupKey = `${string}_component`

export type ComponentGroups = {
	[k: ComponentGroupKey]: Components
}

export type Events = {
	[k: string]: Event
}

export type Event = {
	add?: ComponentGroupKeys
	remove?: ComponentGroupKeys
	trigger?: string
}

export type ComponentGroupKeys = {
	componentGroups: ComponentGroupKey[]
}
