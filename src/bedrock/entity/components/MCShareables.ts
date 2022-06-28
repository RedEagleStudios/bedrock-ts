import { ItemIdentifier } from "../../shared/ItemIdentifier"

export interface MCShareablesItem {
  admire?: boolean
  barter?: boolean
  consume_item?: boolean
  craft_into?: ItemIdentifier
  item?: ItemIdentifier
  item_aux?: number
  max_amount?: number
  pickup_limit?: number
  priority?: number
  stored_in_inventory?: boolean
  surplus_amount?: number
  want_amount?: number
}

export interface MCShareables {
  all_items?: boolean
  all_items_max_amount?: number
  all_items_surplus_amount?: number
  all_items_want_amount?: number
  items?: MCShareablesItem[]
}
