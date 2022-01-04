import { FilterDomain } from "./FilterDomain"
import { FilterOperator } from "./FilterOperator"
import { FilterSubject } from "./FilterSubject"
import { FilterTest } from "./FilterTest"

export interface Filter {
	test?: FilterTest
	operator?: FilterOperator
	subject?: FilterSubject
	domain?: FilterDomain
	value?: number | string
	all_of?: Filter[]
	any_of?: Filter[]
	none_of?: Filter[]
}
