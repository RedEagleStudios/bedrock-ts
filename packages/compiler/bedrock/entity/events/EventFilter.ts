import { EventKey } from "../BPEntity"
import { Filters } from "../filters"
import { FilterSubject } from "../filters/FilterSubject"

export type EventFilter = {
	event?: EventKey
	target?: FilterSubject
	filters?: Filters
}
