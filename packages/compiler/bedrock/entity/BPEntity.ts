import { Identifier } from "../identifier/Identifier"
import { Components } from "./components"
import { Filters } from "./filters"

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

// * Temporary workaround to ignore component group and event keys
export type ComponentGroupKey = `${string}_component`
export type EventKey = `${string}_event`

export type ComponentGroups = {
	[k: ComponentGroupKey]: Components
}

export type Events = {
	[k: EventKey]: Event
}

export type Event = {
	add?: EventAddOrRemove
	remove?: EventAddOrRemove
	trigger?: string
	filters?: Filters
}

export type EventAddOrRemove = {
	componentGroups: ComponentGroupKey[]
}
