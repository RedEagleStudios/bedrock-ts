import { Animate } from "../shared/Animate"
import { AnimationsRecord } from "../shared/AnimationsRecord"
import { Identifier } from "../shared/Identifier"
import { RuntimeIdentifier } from "../shared/RuntimeIdentifier"
import { Components } from "./components"
import { EventTriggerFiltered } from "./events/EventTriggerFiltered"
import { Filters } from "./filters/Filter"

type FormatVersion = "1.16.0" | "1.17.0" | "1.17.10"

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
	scripts?: BPScripts
	animations?: AnimationsRecord
	runtime_identifier?: RuntimeIdentifier
}

export interface BPScripts {
	animate?: Animate[]
}

export interface ComponentGroups {
	[key: string]: Components
}

export interface EventRecord {
	[key: string]: Event
}

export interface Event {
	add?: EventAction
	filters?: Filters
	randomize?: EventRandomize[]
	remove?: EventAction
	sequence?: EventSequence[]
	trigger?: string | EventTriggerFiltered
}

export interface EventRandomize {
	add?: EventAction
	remove?: EventAction
	trigger?: string | EventTriggerFiltered
	weight?: number
}

export interface EventSequence {
	add?: EventAction
	filters?: Filters
	remove?: EventAction
	trigger?: string | EventTriggerFiltered
}

export interface EventAction {
	component_groups: string[]
}
