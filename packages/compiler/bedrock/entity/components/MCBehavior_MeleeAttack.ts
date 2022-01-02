import { EventTrigger } from "../events/EventTrigger"

export interface MCBehavior_MeleeAttack {
	attackOnce?: boolean
	attackTypes?: string
	cooldownTime?: number
	meleeFov?: number
	onAttack?: EventTrigger
	priority?: number
	randomStopInterval?: number
	reachMultiplier?: number
	requireCompletePath?: boolean
	speedMultiplier?: number
	trackTarget?: boolean
	event?: string
	target?: string
}
