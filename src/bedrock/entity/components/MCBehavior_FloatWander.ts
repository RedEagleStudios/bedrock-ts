import { Range } from "../../../types/Range"

export interface MCBehavior_FloatWander {
	float_duration?: Range
	must_reach?: boolean
	random_reselect?: boolean
	xz_dist?: number
	y_dist?: number
	y_offset?: number
}
