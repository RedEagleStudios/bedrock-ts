import { Filters } from "../filters/Filter"
import { FilterSubject } from "../filters/FilterSubject"

export interface EventTriggerFiltered {
	event: string
	target?: FilterSubject
	filters?: Filters
}
