import { StringOrRecord } from "../../types/StringOrRecord"
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
	component_groups?: Record<string, Components>
	components: Components
	events?: Record<string, Event>
}

export interface BPDescription {
	identifier: Identifier
	is_spawnable?: boolean
	is_summonable?: boolean
	is_experimental?: boolean
	scripts?: BPScripts
	animations?: Record<string, string>
	runtime_identifier?: RuntimeIdentifier
}

export interface BPScripts {
	animate?: StringOrRecord[]
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
