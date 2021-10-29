import { MCHealth } from "./BPComponents"

export type FormatVersion = 
| "1.16.0"
| "1.17.0"

export type Description = {
	identifier: string
	is_spawnable?: boolean
	is_summonable?: boolean
	is_experimental?: boolean
}

export type Components = {
	"minecraft:health": MCHealth
}

export type ComponentGroups = {
	[k: string]: Components
}

export type ComponentGroupKeys = {
	component_groups: string[]
}

export type EventBase = {
	add?: ComponentGroupKeys
	remove?: ComponentGroupKeys
	trigger?: string
}

export type Randomize = EventBase & {
	weight: number
}

export type Sequence = EventBase & {
	
}

export type EventProps = EventBase & {
	randomize?: Randomize[]
	sequence?: Sequence[]
}

export type DefaultEvents = {
	"minecraft:entity_spawned"?: EventProps
}

export type Events = DefaultEvents & {
	[k: string]: EventProps
}

export type Entity = {
	description: Description;
	component_groups?: ComponentGroups;
	components?: Components;
	events?: Events;
}

export type EntityBehavior = {
	format_version: FormatVersion
	"minecraft:entity": Entity
}
