import { BPEntity, ComponentGroups, Event, EventRecord } from "../../bedrock/entity/BPEntity"
import { Components } from "../../bedrock/entity/components"
import { Identifier } from "../../bedrock/keys/Identifier"

/**
 * BPEntity wrapper to provide some utility functions
 */
export class BPEntityBuilder {
	private behavior: BPEntity

	/**
	 * Creates BPEntity builder
	 *
	 * @constructor
	 * @param arg Identifier or BPEntity
	 *
	 * @example
	 * ```typescript
	 * new BPEntityBuilder("minecraft:player")
	 * ```
	 * or
	 * @example
	 * ```typescript
	 * new BPEntityBuilder({
	 * 	format_version: "1.16.0",
	 * 	MCEntity: {
	 * 		description: {
	 * 			identifier: "minecraft:player",
	 * 			is_spawnable: true,
	 * 			is_summonable: true,
	 * 			is_experimental: false,
	 * 		},
	 * 		components: {},
	 * 	},
	 * })
	 * ```
	 */
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

	/**
	 * Add or remove component groups from BPEntity
	 *
	 * @param component_groups Component groups that will be added or removed
	 */
	public setComponentGroups(component_groups: ComponentGroups): void {
		this.behavior.MCEntity.component_groups ??= {}
		this.behavior.MCEntity.component_groups = {
			...this.behavior.MCEntity.component_groups,
			...component_groups,
		}
	}

	/**
	 * Add or remove components from BPEntity
	 *
	 * @param components Components that will be added or removed
	 */
	public setComponents(components: Components): void {
		this.behavior.MCEntity.components = {
			...this.behavior.MCEntity.components,
			...components,
		}
	}

	/**
	 * Add or remove events from BPEntity
	 *
	 * @param events Events that will be added or removed
	 */
	public setEvents(events: EventRecord): void {
		this.behavior.MCEntity.events ??= {}
		this.behavior.MCEntity.events = {
			...this.behavior.MCEntity.events,
			...events,
		}
	}

	/**
	 * Get component in BPEntity
	 * @param componentName Component name
	 *
	 * @returns Component in BPEntity
	 *
	 * @example
	 * const typeFamily = getComponent("MCTypeFamily") as MCTypeFamily
	 */
	public getComponent(componentName: keyof Components): unknown {
		return this.behavior.MCEntity.components[componentName]
	}

	/**
	 * Get component inside a component group
	 *
	 * @param groupName Component group name
	 * @param componentName Component name
	 *
	 * @returns Component in the component group
	 */
	public getComponentInGroup(groupName: string, componentName: keyof Components): unknown {
		this.behavior.MCEntity.component_groups ??= {}
		this.behavior.MCEntity.component_groups[groupName] ??= {}
		return this.behavior.MCEntity.component_groups[groupName][componentName]
	}

	/**
	 * Get event in BPEntity
	 *
	 * @param event Event name
	 *
	 * @returns Event in BPEntity
	 */
	public getEvent(event: string): Event {
		this.behavior.MCEntity.events ??= {}
		this.behavior.MCEntity.events[event] ??= {}
		return this.behavior.MCEntity.events[event]
	}

	/**
	 * Build BPEntity
	 */
	public build(): BPEntity {
		return this.behavior
	}
}
