type FormatVersion = 
| "1.16.0"
| "1.17.0"

type Description = {
	identifier: string
	is_spawnable?: boolean
	is_summonable?: boolean
	is_experimental?: boolean
}

type ComponentDeclaration = {
	"minecraft:health": MCHealth,
	"minecraft:collision_box": MCCollisionBox,
}

type Components = Partial<ComponentDeclaration>

type ComponentGroups = {
	[k: string]: Components
}

type ComponentGroupKeys = {
	component_groups: string[]
}

type EventBase = {
	add?: ComponentGroupKeys
	remove?: ComponentGroupKeys
	trigger?: string
}

type Randomize = EventBase & {
	weight: number
}

type Sequence = EventBase & {
	
}

type EventProps = EventBase & {
	randomize?: Randomize[]
	sequence?: Sequence[]
}

type DefaultEvents = {
	"minecraft:entity_spawned"?: EventProps
}

type Events = DefaultEvents & {
	[k: string]: EventProps
}

type Entity = {
	description: Description;
	component_groups?: ComponentGroups;
	components?: Components;
	events?: Events;
}

type EntityBehavior = {
	format_version: string
	"minecraft:entity": Entity
}
