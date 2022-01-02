import { Identifier } from "../identifier/Identifier"
import { Components } from "./components"
import { Filters } from "./filters"

type FormatVersion = "1.16.0" | "1.17.0"

export interface BPEntity {
	format_version: FormatVersion
	MCEntity: MCEntity
}

export interface MCEntity {
	description: BPDescription
	component_groups?: ComponentGroups
	components?: Components
	events?: Events
}

export interface BPDescription {
	identifier: Identifier
	is_spawnable?: boolean
	is_summonable?: boolean
	is_experimental?: boolean
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
	component_groups: string[]
}
