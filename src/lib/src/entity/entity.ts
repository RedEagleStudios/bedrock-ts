import { makeJSON } from "../utils"

export abstract class EntityObject {
	public abstract behavior(): EntityBehavior
	public abstract resource(): string
}

export function Entity<T extends typeof EntityObject>(target: T) {
	makeJSON(target.prototype.behavior(), "./out/BP/entity/")
}
