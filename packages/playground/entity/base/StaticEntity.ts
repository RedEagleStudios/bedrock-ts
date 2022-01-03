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

	public createBP(): BPEntity {
		return {
			format_version: "1.16.0",
			MCEntity: {
				description: {
					identifier: this.identifier,
				},
				components: {
					MCPhysics: {},
				},
			},
		}
	}

	public createRP(): RPEntity {
		const entity_name = this.identifier.removeNamespace()
		return {
			format_version: "1.10.0",
			MCClientEntity: {
				description: {
					identifier: this.identifier,
					materials: {
						default: `entity_alphatest`,
					},
					textures: {
						default: `textures/entity/${entity_name}`,
					},
					geometry: {
						model: `geometry.${entity_name}`,
					},
					render_controllers: ["controller.render.default"],
				},
			},
		}
	}
}
