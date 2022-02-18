import { Identifier } from "../.."
import { BPItemBuilder } from "../../builder/item/BPItemBuilder"
import { RPItemBuilder } from "../../builder/item/RPItemBuilder"
import { BPItem } from "./BPItem"
import { RPItem } from "./RPItem"

export interface CoreItem {
	dir?: string
	identifier: Identifier
	createBP?: (builder: BPItemBuilder) => BPItem
	createRP?: (builder: RPItemBuilder) => RPItem
}
