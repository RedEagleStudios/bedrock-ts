import { Identifier } from "../identifier/Identifier"
import { BPEntity } from "./BPEntity"
import { RPEntity } from "./RPEntity"

export abstract class SimpleEntity {
	public abstract identifier: Identifier
	public abstract getBP(): BPEntity
	public abstract getRP(): RPEntity
}
