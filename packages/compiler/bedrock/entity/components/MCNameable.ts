export interface MCNameable {
	renaming?: boolean
	alwaysShow?: boolean
	defaultOnNamedEvent?: string
	nameActions?: MCNameableNameAction[]
}

export interface MCNameableNameAction {
	name?: string
	event?: string
}
