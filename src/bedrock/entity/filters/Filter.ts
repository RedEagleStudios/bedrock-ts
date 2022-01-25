import { FilterDomain } from "./FilterDomain"
import { FilterOperator } from "./FilterOperator"
import { FilterSubject } from "./FilterSubject"
import { FilterTest } from "./FilterTest"

export type Filters = Filter | Filter[]

export interface Filter {
	all_of?: Filter[]
	any_of?: Filter[]
	domain?: FilterDomain
	none_of?: Filter[]
	operator?: FilterOperator
	subject?: FilterSubject
	test?: FilterTest
	value?: number | string
}
