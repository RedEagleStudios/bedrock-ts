import { Vector2 } from "../../../types/Vector"

export interface MCExplode {
	breaksBlocks?: boolean
	causesFire?: boolean
	destroyAffectedByGriefing?: boolean
	fireAffectedByGriefing?: boolean
	fuseLength?: number | Vector2
	fuseLit?: boolean
	maxResistance?: number
	power?: number
}
