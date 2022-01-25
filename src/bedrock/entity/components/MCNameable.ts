export interface MCNameableNameAction {
	name_filter: string
	on_named: string
}

export interface MCNameable {
	allow_name_tag_renaming?: boolean
	always_show?: boolean
	default_trigger?: string
	name_actions?: MCNameableNameAction[]
}
