export interface MCNameableNameAction {
	on_named: string
	name_filter: string
}

export interface MCNameable {
	always_show?: boolean
	default_trigger?: string
	name_actions?: MCNameableNameAction[]
	allow_name_tag_renaming?: boolean
}
