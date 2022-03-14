import { Identifier } from "../.."
import { BPItemBuilder } from "../../builder/item/BPItemBuilder"
import { RPItemBuilder } from "../../builder/item/RPItemBuilder"
import { BPItem } from "./BPItem"
import { RPItem } from "./RPItem"

export interface CoreItem {
	/**
	 * Custom item directory, this will also affects the auto-generated item_textures path
	 */
	dir?: string
	/**
	 * Override item name in en_US.lang
	 */
	name?: string
	identifier: Identifier
	createBP?: (builder: BPItemBuilder) => BPItem
	createRP?: (builder: RPItemBuilder) => RPItem
}
