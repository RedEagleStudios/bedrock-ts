import { Identifier } from "../identifier/Identifier"
import { Components } from "./components"
import { Filters } from "./filters"

type FormatVersion = "1.16.0" | "1.17.0"

export interface BPEntity {
	formatVersion: FormatVersion
	MCEntity: MCEntity
}

export interface MCEntity {
	description: BPDescription
	componentGroups?: ComponentGroups
	components?: Components
	events?: Events
}

export interface BPDescription {
	identifier: Identifier
	isSpawnable?: boolean
	isSummonable?: boolean
	isExperimental?: boolean
}

export interface ComponentGroups {
	[key: string]: Components
}

export interface Events {
	[key: string]: Event
}

export interface Event {
	add?: EventAddOrRemove
	remove?: EventAddOrRemove
	trigger?: string
	filters?: Filters[]
}

export interface EventAddOrRemove {
	componentGroups: string[]
}
