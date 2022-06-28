import { Range } from "../../../types/Range"
import { ItemIdentifier } from "../../shared/ItemIdentifier"

export interface MCBehavior_Tempt {
  can_get_scared?: boolean
  can_tempt_vertically?: boolean
  can_tempt_while_ridden?: boolean
  items?: ItemIdentifier[]
  priority?: number
  sound_interval?: Range
  speed_multiplier?: number
  tempt_sound?: string
  within_radius?: number
}
