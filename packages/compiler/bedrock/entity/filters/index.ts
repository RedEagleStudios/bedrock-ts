import { FilterDomain } from "./FilterDomain"
import { FilterOperators } from "./FilterOperators"
import { FilterSubject } from "./FilterSubject"
import { FilterTests } from "./FilterTests"

export type Filters = Exclude<UnionFilter, BaseFilterGroups>[] | Exclude<UnionFilter, BaseFilter>[]

type UnionFilter = BaseFilterGroups | BaseFilter

type BaseFilter = {
	test?: FilterTests
	operator?: FilterOperators
	subject?: FilterSubject
	domain?: FilterDomain
	value?: number | string
}

type BaseFilterGroups = {
	allOf?: UnionFilter[]
	anyOf?: UnionFilter[]
	noneOf?: UnionFilter[]
}
