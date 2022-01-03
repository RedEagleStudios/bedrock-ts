import { FilterDomain } from "./FilterDomain"
import { FilterOperators } from "./FilterOperators"
import { FilterSubject } from "./FilterSubject"
import { FilterTests } from "./FilterTests"

export interface Filter {
	test?: FilterTests
	operator?: FilterOperators
	subject?: FilterSubject
	domain?: FilterDomain
	value?: number | string
	all_of?: Filter[]
	any_of?: Filter[]
	none_of?: Filter[]
}
