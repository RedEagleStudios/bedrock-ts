import { Entity, EntityModel } from "../../lib/src/models/entity"

@Entity
export class Test extends EntityModel {
	behavior(): EntityBehavior {
		return {
			formatVersion: "1.16.0",
			MCEntity: {
				description: {
					identifier: "minecraft:test",
				},
				componentGroups: {
					bla: {
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
					bla: {
						add: {
							componentGroups: [],
						},
						remove: {
							componentGroups: [],
						},
					},
				},
			},
		}
	}
}
