import { BPEntity, ComponentGroups, EventRecord } from "../../bedrock/entity/BPEntity"
import { Components } from "../../bedrock/entity/components"
import { Identifier } from "../../bedrock/keys/Identifier"

export class BPEntityBuilder {
	private behavior: BPEntity

	constructor(arg: Identifier | BPEntity) {
		if (typeof arg === "string") {
			this.behavior = {
				format_version: "1.16.0",
				MCEntity: {
					description: {
						identifier: arg,
					},
					components: {},
				},
			}
		} else {
			this.behavior = arg
		}
	}

	public build(): BPEntity {
		return this.behavior
	}

	public setComponentGroups(component_groups: ComponentGroups) {
		if (!this.behavior.MCEntity.component_groups) this.behavior.MCEntity.component_groups = {}
		this.behavior.MCEntity.component_groups = {
			...this.behavior.MCEntity.component_groups,
			...component_groups,
		}
	}

	public setComponents(components: Components) {
		this.behavior.MCEntity.components = {
			...this.behavior.MCEntity.components,
			...components,
		}
	}

	public setEvents(events: EventRecord) {
		if (!this.behavior.MCEntity.events) this.behavior.MCEntity.events = {}
		this.behavior.MCEntity.events = {
			...this.behavior.MCEntity.events,
			...events,
		}
	}

	public getComponent(component: keyof Components): unknown {
		return this.behavior.MCEntity.components[component]
	}
}
