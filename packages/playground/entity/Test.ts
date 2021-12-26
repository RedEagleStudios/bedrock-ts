import { BPEntity } from "../../compiler/bedrock/entity/bp/BPEntity"
import { Identifier } from "../../compiler/bedrock/entity/Identifier"
import { RPEntity } from "../../compiler/bedrock/entity/rp/RPEntity"
import { SimpleEntity } from "../../compiler/bedrock/entity/SimpleEntity"

export class Test implements SimpleEntity {
	identifier: Identifier = "minecraft:att"
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
