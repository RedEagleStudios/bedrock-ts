import { Identifier } from "../identifier/Identifier"
import { BPEntity } from "./BPEntity"
import { RPEntity } from "./RPEntity"

export abstract class SimpleEntity {
	public abstract identifier: Identifier
	public abstract createBP(): BPEntity
	public abstract createRP(): RPEntity
}
