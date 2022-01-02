import { Filters } from "../filters"

export interface MCBehavior_HurtByTarget {
	alertSameType?: boolean
	entityTypes?: string[]
	hurtOwner?: boolean
	priority?: number
	filters?: Filters[]
	maxDist?: number
	mustSee?: boolean
	mustSeeForgetDuration?: number
	sprintSpeedMultiplier?: number
	walkSpeedMultiplier?: number
}
