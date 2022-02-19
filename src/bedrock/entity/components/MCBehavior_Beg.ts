import { Range } from "../../../types/Range"
import { ItemIdentifier } from "../../shared/ItemIdentifier"

export interface MCBehavior_Beg {
	items: ItemIdentifier[]
	look_distance?: number
	look_time?: number | Range
	priority?: number
}
