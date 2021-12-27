import { BPEntity } from "../../compiler/bedrock/entity/BPEntity"
import { RPEntity } from "../../compiler/bedrock/entity/RPEntity"
import { SimpleEntity } from "../../compiler/bedrock/entity/SimpleEntity"
import { Identifier } from "../../compiler/bedrock/identifier/Identifier"

export class Dummy implements SimpleEntity {
	identifier: Identifier = "minecraft:dummy"
	createBP(): BPEntity {
		return {
			formatVersion: "1.16.0",
			MCEntity: {
				description: {
					identifier: this.identifier,
				},
				componentGroups: {
					bla: {
						MCHealth: {
							max: 1,
							value: 1,
						},
					},
					something: {
						MCCollisionBox: {
							height: 1,
							width: 1,
						},
					},
				},
				components: {
					MCHealth: {},
				},
				events: {
					bla: {
						add: {
							componentGroups: ["bla"],
						},
						remove: {
							componentGroups: ["something"],
						},
					},
				},
			},
		}
	}

	createRP(): RPEntity {
		return {
			formatVersion: "1.10.0",
			MCClientEntity: {
				description: {
					identifier: this.identifier,
				},
			},
		}
	}
}
