import { BPEntityBuilder } from "../../builder/entity/BPEntityBuilder"
import { RPEntityBuilder } from "../../builder/entity/RPEntityBuilder"
import { Identifier } from "../shared/Identifier"
import { BPEntity } from "./BPEntity"
import { RPEntity } from "./RPEntity"

export interface CoreEntity {
	dir?: string
	identifier: Identifier
	createBP?: (builder: BPEntityBuilder) => BPEntity
	createRP?: (builder: RPEntityBuilder) => RPEntity
}
