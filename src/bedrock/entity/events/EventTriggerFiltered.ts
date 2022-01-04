import { Filter } from "../filters"
import { FilterSubject } from "../filters/FilterSubject"

export interface EventTriggerFiltered {
	event: string
	target?: FilterSubject
	filters?: Filter[]
}
