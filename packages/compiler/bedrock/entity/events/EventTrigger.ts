import { FilterSubject } from "../filters/FilterSubject"

export interface EventTrigger {
	event?: string
	target?: FilterSubject
}
