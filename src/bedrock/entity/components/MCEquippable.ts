import { ItemIdentifier } from "../../shared/ItemIdentifier"
import { EventTrigger } from "../events/EventTrigger"

export interface MCEquippableSlot {
  accepted_items?: ItemIdentifier[]
  interact_text?: string
  item?: ItemIdentifier
  on_equip?: string | EventTrigger
  on_unequip?: string | EventTrigger
  slot?: number
}

export interface MCEquippable {
  slots?: MCEquippableSlot[]
}
