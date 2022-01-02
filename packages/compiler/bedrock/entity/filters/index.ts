import { FilterDomain } from "./FilterDomain"
import { FilterOperators } from "./FilterOperators"
import { FilterSubject } from "./FilterSubject"
import { FilterTests } from "./FilterTests"

export interface Filters {
	test?: FilterTests
	operator?: FilterOperators
	subject?: FilterSubject
	domain?: FilterDomain
	value?: number | string
	allOf?: Filters
	anyOf?: Filters
	noneOf?: Filters
}
