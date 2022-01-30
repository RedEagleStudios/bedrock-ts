import { Identifier } from "../../bedrock/shared/Identifier"

export class LangBuilder {
	private lang: string[] = []

	constructor(packName?: string, type?: "Behavior" | "Resource") {
		if (packName) this.lang.push(`pack.name=${packName}`)
		if (type) this.lang.push(`pack.description=${type} Pack for ${packName}`)
	}

	public addBlock(id: Identifier) {
		this.lang.push(`tile.${id}.name=${id.toName()}`)
	}

	public addEntity(id: Identifier) {
		this.lang.push(`entity.${id}.name=${id.toName()}`)
		this.lang.push(`item.spawn_egg.entity.${id}.name=Spawn ${id.toName()}`)
	}

	public addItem(id: Identifier) {
		this.lang.push(`item.${id}.name=${id.toName()}`)
	}

	public build() {
		return this.lang.join("\n")
	}
}
