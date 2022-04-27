import { BPEntityBuilder } from "../../builder/entity/BPEntityBuilder"
import { RPEntityBuilder } from "../../builder/entity/RPEntityBuilder"
import { Identifier } from "../shared/Identifier"
import { BPEntity } from "./BPEntity"
import { RPEntity } from "./RPEntity"

export interface CoreEntity {
	/**
	 * Custom entity directory, this will also affects the auto-generated rp texture path
	 */
	dir?: string
	/**
	 * Override entity name in en_US.lang
	 */
	name?: string
	/**
	 * Override entity spawn egg name in en_US.lang
	 */
	spawn_egg?: string
	/**
	 * Override spawn egg prefix, incompatible with spawn_egg
	 */
	spawn_egg_prefix?: string
	/**
	 * Marks the entity as rideable to generate action.hint.exit text
	 */
	rideable?: boolean | string
	/**
	 * Marks the entity as vanilla to disable en_US.lang generation
	 */
	vanilla?: boolean
	identifier: Identifier
	createBP?: (builder: BPEntityBuilder) => BPEntity
	createRP?: (builder: RPEntityBuilder) => RPEntity
}
