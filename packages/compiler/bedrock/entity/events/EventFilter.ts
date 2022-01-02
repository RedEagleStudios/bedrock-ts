import { Filters } from "../filters"
import { FilterSubject } from "../filters/FilterSubject"

export interface EventFilter {
	event?: string
	target?: FilterSubject
	filters?: Filters
}
