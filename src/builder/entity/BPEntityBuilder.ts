import { BPDescription, BPEntity, Event } from "../../bedrock/entity/BPEntity"
import { Components } from "../../bedrock/entity/components"
import { RawQuery } from "../../bedrock/query/Query"
import { Identifier } from "../../bedrock/shared/Identifier"
import { assign } from "../../utils/assign"
import { Builder } from "../Builder"
import { QueryBuilder } from "../query/QueryBuilder"

export class BPEntityBuilder extends Builder<BPEntity> {
	constructor(identifier: Identifier) {
		super({
			format_version: "1.16.0",
			MCEntity: {
				description: {
					identifier: identifier,
					is_spawnable: true,
					is_summonable: true,
					is_experimental: false,
				},
				components: {},
			},
		})
	}

	/**
	 * @returns BPEntity Identifier
	 */
	public getIdentifier(): Identifier {
		return this.object.MCEntity.description.identifier
	}

	/**
	 * Set BPEntity description
	 * @param description
	 */
	public setDescription(description: Omit<BPDescription, "identifier" | "animations" | "scripts">) {
		assign(this.object.MCEntity.description, description)
	}

	/**
	 * Register animation or animation controller to BPEntity
	 *
	 * @param animationName Animation name
	 * @param animationId Animation id
	 * @param playCondition Molang query or "always"
	 *
	 * @example
	 * addAnimation("example", "animation.example", "always")
	 */
	public addAnimation(
		animationName: string,
		animationId: string,
		playCondition?: QueryBuilder | RawQuery | "always"
	): void {
		const description = this.object.MCEntity.description
		description.scripts ??= {}
		description.scripts.animate ??= []
		description.animations ??= {}

		assign(description.animations, {
			[animationName]: animationId,
		})
		if (!playCondition) return
		if (playCondition === "always") {
			description.scripts.animate.indexOf(animationName) >= 0 || description.scripts.animate.push(animationName)
		} else {
			description.scripts.animate.push({ [animationName]: playCondition.toString() })
		}
	}

	/**
	 * Add or remove component groups from BPEntity
	 *
	 * @param component_groups Component groups that will be added or removed
	 */
	public setComponentGroups(component_groups: Record<string, Components>): void {
		this.object.MCEntity.component_groups ??= {}
		assign(this.object.MCEntity.component_groups, component_groups)
	}

	/**
	 * Add or remove components from BPEntity
	 *
	 * @param components Components that will be added or removed
	 */
	public setComponents(components: Components): void {
		assign(this.object.MCEntity.components, components)
	}

	/**
	 * Add or remove events from BPEntity
	 *
	 * @param events Events that will be added or removed
	 */
	public setEvents(events: Record<string, Event>): void {
		this.object.MCEntity.events ??= {}
		assign(this.object.MCEntity.events, events)
	}

	/**
	 * Get component in BPEntity
	 *
	 * @param component Component name
	 *
	 * @returns Component in BPEntity
	 *
	 * @example
	 * const typeFamily = getComponent("MCTypeFamily")
	 */
	public getComponent<T extends keyof Components>(component: T): Components[T] {
		return this.object.MCEntity.components[component]
	}

	/**
	 * Get component group in BPEntity
	 *
	 * @param group Component group name
	 *
	 * @returns Component in the component group
	 */
	public getGroup(group: string): Components {
		this.object.MCEntity.component_groups ??= {}
		this.object.MCEntity.component_groups[group] ??= {}
		return this.object.MCEntity.component_groups[group]
	}

	/**
	 * Get component inside a component group
	 *
	 * @param group Component group name
	 * @param component Component name
	 *
	 * @returns Component in the component group
	 */
	public getComponentInGroup<T extends keyof Components>(group: string, component: T): Components[T] {
		return this.getGroup(group)[component]
	}

	/**
	 * Get event in BPEntity
	 *
	 * @param event Event name
	 *
	 * @returns Event in BPEntity
	 */
	public getEvent(event: string): Event {
		this.object.MCEntity.events ??= {}
		this.object.MCEntity.events[event] ??= {}
		return this.object.MCEntity.events[event]
	}
}
