import { BPEntity } from "../../compiler/bedrock/entity/BPEntity"
import { RPEntity } from "../../compiler/bedrock/entity/RPEntity"
import { SimpleEntity } from "../../compiler/bedrock/entity/SimpleEntity"
import { Identifier } from "../../compiler/bedrock/identifier/Identifier"

export class Dummy extends SimpleEntity {
	identifier: Identifier = "minecraft:dummy"

	public createBP(): BPEntity {
		return {
			format_version: "1.16.0",
			MCEntity: {
				description: {
					identifier: this.identifier,
				},
				component_groups: {
					test_component: {
						MCHealth: {
							max: 1,
							value: 1,
						},
					},
				},
				components: {
					MCHealth: {},
				},
				events: {
					test_event: {
						add: {
							component_groups: ["test_component"],
						},
						remove: {
							component_groups: ["test_component"],
						},
					},
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
					animations: {
						walk: `animation.${entity_name}.walk`,
						idle: `animation.${entity_name}.idle`,
						controller: `controller.animation.${entity_name}`,
					},
					scripts: {
						animate: ["controller"],
					},
					render_controllers: ["controller.render.default"],
				},
			},
		}
	}
}
