import { Filters } from "../filters"
import { Dummy } from "./Dummy"

export interface MCDespawn {
	despawnFromChance?: boolean
	despawnFromDistance?: Dummy
	despawnFromInactivity?: boolean
	despawnFromSimulationEdge?: boolean
	filters?: Filters[]
	minRangeInactivityTimer?: number
	minRangeRandomChance?: number
	removeChildEntities?: boolean
	maxDistance?: number
	minDistance?: number
}
