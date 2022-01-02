import { Filters } from "../filters"

export interface MCSpawnEntity {
	entities?: MCSpawnEntityEntity[]
}

export interface MCSpawnEntityEntity {
	filters?: Filters[]
	maxWaitTime?: number
	minWaitTime?: number
	numToSpawn?: number
	shouldLeash?: boolean
	singleUse?: boolean
	spawnEntity?: string
	spawnEvent?: string
	spawnItem?: string
	spawnMethod?: string
	spawnSound?: string
}
