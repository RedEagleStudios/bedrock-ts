import { Identifier } from "../identifier/Identifier"
import { Components } from "./components"
import { Filter } from "./filters/Filter"

type FormatVersion = "1.16.0" | "1.17.0"

export interface BPEntity {
	format_version: FormatVersion
	MCEntity: MCEntity
}

export interface MCEntity {
	description: BPDescription
	component_groups?: ComponentGroups
	components: Components
	events?: EventRecord
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

export interface EventRecord {
	[key: string]: Event
}

export interface Event {
	add?: EventAction
	remove?: EventAction
	trigger?: string
	filters?: Filter[]
}

export interface EventAction {
	component_groups: string[]
}
