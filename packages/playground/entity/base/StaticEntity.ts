import { BPEntity } from "../../../compiler/bedrock/entity/BPEntity"
import { RPEntity } from "../../../compiler/bedrock/entity/RPEntity"
import { SimpleEntity } from "../../../compiler/bedrock/entity/SimpleEntity"
import { Identifier } from "../../../compiler/bedrock/identifier/Identifier"

export class StaticEntity extends SimpleEntity {
	public identifier: Identifier

	constructor(name: string) {
		super()
		this.identifier = `minecraft:${name}`
	}

	public getBP(): BPEntity {
		return {
			formatVersion: "1.16.0",
			MCEntity: {
				description: {
					identifier: this.identifier,
				},
				components: {},
			},
		}
	}

	public getRP(): RPEntity {
		const entityName = this.identifier.removeNamespace()
		return {
			formatVersion: "1.10.0",
			MCClientEntity: {
				description: {
					identifier: this.identifier,
					materials: {
						default: `entity_alphatest`,
					},
					textures: {
						default: `textures/entity/${entityName}`,
					},
					geometry: {
						model: `geometry.${entityName}`,
					},
					renderControllers: ["controller.render.default"],
				},
			},
		}
	}
}
