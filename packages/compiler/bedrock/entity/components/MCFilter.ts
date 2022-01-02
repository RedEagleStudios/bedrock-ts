export interface MCFilter {
	all_of?: MCFilter[]
	any_of?: MCFilter[]
	domain?: string
	none_of?: MCFilter[]
	operator?: string
	subject?: string
	test?: string
	value?: any
}
