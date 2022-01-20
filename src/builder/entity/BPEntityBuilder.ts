import { BPEntity, ComponentGroups, Event, EventRecord } from "../../bedrock/entity/BPEntity"
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
						is_spawnable: true,
						is_summonable: true,
						is_experimental: false,
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
		this.behavior.MCEntity.component_groups ??= {}
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
		this.behavior.MCEntity.events ??= {}
		this.behavior.MCEntity.events = {
			...this.behavior.MCEntity.events,
			...events,
		}
	}

	public getComponent(component: keyof Components): unknown {
		return this.behavior.MCEntity.components[component]
	}

	public getComponentInGroup(group: string, component: keyof Components): unknown {
		this.behavior.MCEntity.component_groups ??= {}
		this.behavior.MCEntity.component_groups[group] ??= {}
		return this.behavior.MCEntity.component_groups[group][component]
	}

	public getEvent(event: string): Event {
		this.behavior.MCEntity.events ??= {}
		this.behavior.MCEntity.events[event] ??= {}
		return this.behavior.MCEntity.events[event]
	}
}
