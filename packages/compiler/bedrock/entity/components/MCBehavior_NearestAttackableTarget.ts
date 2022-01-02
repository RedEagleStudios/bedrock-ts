import { Filters } from "../filters"

export interface MCBehavior_NearestAttackableTarget {
	attackInterval?: number
	attackIntervalMin?: number
	attackOwner?: boolean
	entityTypes?: string[]
	mustReach?: boolean
	mustSee?: boolean
	mustSeeForgetDuration?: number
	persistTime?: number
	priority?: number
	reselectTargets?: boolean
	scanInterval?: number
	setPersistent?: boolean
	targetInvisibleMultiplier?: number
	targetSearchHeight?: number
	targetSneakVisibilityMultiplier?: number
	withinRadius?: number
	filters?: Filters[]
	maxDist?: number
}
