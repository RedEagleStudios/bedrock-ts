import { writeJSON } from "../utils/writeJSON"

export abstract class EntityModel {
	public abstract behavior(): EntityBehavior
}

export function Entity<T extends typeof EntityModel>(target: T) {
	writeJSON(target.prototype.behavior(), "BP/entities/", `${target.name.toLowerCase()}.json`)
}
