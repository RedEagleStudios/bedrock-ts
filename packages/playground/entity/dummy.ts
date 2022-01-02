import { BPEntity } from "../../compiler/bedrock/entity/BPEntity"
import { RPEntity } from "../../compiler/bedrock/entity/RPEntity"
import { SimpleEntity } from "../../compiler/bedrock/entity/SimpleEntity"
import { Identifier } from "../../compiler/bedrock/identifier/Identifier"

export class Dummy extends SimpleEntity {
	identifier: Identifier = "minecraft:dummy"

	public getBP(): BPEntity {
		return {
			formatVersion: "1.16.0",
			MCEntity: {
				description: {
					identifier: this.identifier,
				},
				componentGroups: {
					test_component: {
						MCHealth: {
							max: 1,
							value: 1,
						},
					},
					testComponent: {
						MCCollisionBox: {
							height: 1,
							width: 1,
						},
						MCBehavior_FollowParent: {},
						MCJump_Static: {},
					},
				},
				components: {
					MCHealth: {},
				},
				events: {
					testEvent: {
						add: {
							componentGroups: ["test_component"],
						},
						remove: {
							componentGroups: ["testComponent"],
						},
					},
				},
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
					animations: {
						walk: `animation.${entityName}.walk`,
						idle: `animation.${entityName}.idle`,
						controller: `controller.animation.${entityName}`,
					},
					scripts: {
						animate: ["controller"],
					},
					renderControllers: ["controller.render.default"],
				},
			},
		}
	}
}
