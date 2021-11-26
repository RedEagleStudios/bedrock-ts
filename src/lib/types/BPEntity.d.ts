type FormatVersion = 
| "1.16.0"
| "1.17.0"

type Description = {
	identifier: string
	isSpawnable?: boolean
	isSummonable?: boolean
	isExperimental?: boolean
}

type ComponentDeclaration = {
	MCHealth: MCHealth,
	MCHealth: MCCollisionBox,
}

type Components = Partial<ComponentDeclaration>

type ComponentGroups = {
	[k: string]: Components
}

type ComponentGroupKeys = {
	componentGroups: string[]
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
	MCEntitySpawned?: EventProps
}

type Events = DefaultEvents & {
	[k: string]: EventProps
}

type Entity = {
	description: Description;
	componentGroups?: ComponentGroups;
	components?: Components;
	events?: Events;
}

type EntityBehavior = {
	formatVersion: string
	MCEntity: Entity
}
