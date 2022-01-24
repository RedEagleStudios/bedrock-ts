export type Query =
	| "is_variant"
	| "is_mark_variant"
	| "skin_id"
	| "is_baby"
	| "is_sheared"
	| "is_saddled"
	| "is_tamed"
	| "is_chested"
	| "is_powered"
	| "is_stunned"
	| "can_climb"
	| "can_fly"
	| "can_power_jump"
	| "is_ignited"
	| "out_of_control"

export type RawQuery = `query.${string}` | `q.${string}`
