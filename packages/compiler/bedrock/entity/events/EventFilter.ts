import { Filters } from "../filters"
import { FilterSubject } from "../filters/FilterSubject"

export type EventFilter = {
	event?: string
	target?: FilterSubject
	filters?: Filters
}
