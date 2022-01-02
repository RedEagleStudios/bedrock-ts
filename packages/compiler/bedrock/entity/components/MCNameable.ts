export interface MCNameable {
	renaming?: boolean
	always_show?: boolean
	default_on_named_event?: string
	name_actions?: MCNameableNameAction[]
}

export interface MCNameableNameAction {
	name?: string
	event?: string
}
