import { FilterDomain } from "./FilterDomain"
import { FilterOperator } from "./FilterOperator"
import { FilterSubject } from "./FilterSubject"
import { FilterTest } from "./FilterTest"

export type Filters = Filter | Filter[]

interface Filter {
	test?: FilterTest
	operator?: FilterOperator
	subject?: FilterSubject
	domain?: FilterDomain
	value?: number | string
	all_of?: Filters
	any_of?: Filters
	none_of?: Filters
}
