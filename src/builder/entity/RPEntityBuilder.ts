import { RPEntity } from "../../bedrock/entity/RPEntity"
import { RawQuery } from "../../bedrock/query/Query"
import { AnimationId } from "../../bedrock/shared/AnimationId"
import { AnimControllerId } from "../../bedrock/shared/AnimControllerId"
import { GeometryId } from "../../bedrock/shared/GeometryId"
import { Identifier } from "../../bedrock/shared/Identifier"
import { QueryBuilder } from "../query/QueryBuilder"

export class RPEntityBuilder {
	private resource: RPEntity
	constructor(arg: Identifier | RPEntity) {
		if (typeof arg === "string") {
			const name = arg.removeNamespace()
			this.resource = {
				format_version: "1.10.0",
				MCClientEntity: {
					description: {
						identifier: arg,
						materials: {
							default: "entity_alphatest",
						},
						// TODO: Should get entity path as well
						textures: {
							default: `textures/entity/${name}`,
						},
						geometry: {
							default: `geometry.${name}`,
						},
						spawn_egg: {
							texture: name,
						},
						render_controllers: ["controller.render.default"],
					},
				},
			}
		} else {
			this.resource = arg
		}
	}

	/**
	 * Register animation or animation controller to BPEntity
	 *
	 * @param animationName Animation name
	 * @param animationId Animation id
	 * @param playCondition Molang query or "always"
	 */
	public addAnimation(
		animationName: string,
		animationId: AnimControllerId | AnimationId,
		playCondition?: QueryBuilder | RawQuery | "always"
	): void {
		const description = this.resource.MCClientEntity.description
		description.scripts ??= {}
		description.scripts.animate ??= []
		description.animations ??= {}

		description.animations = {
			...description.animations,
			[animationName]: animationId,
		}
		if (!playCondition) return
		if (playCondition === "always") {
			description.scripts.animate.indexOf(animationName) >= 0 || description.scripts.animate.push(animationName)
		} else {
			description.scripts.animate.push({ [animationName]: playCondition.toString() })
		}
	}

	public setMaterials(materials: Record<string, string>) {
		const description = this.resource.MCClientEntity.description
		description.materials = {
			...description.materials,
			...materials,
		}
	}

	public setGeometry(geometry: Record<string, GeometryId>) {
		const description = this.resource.MCClientEntity.description
		description.geometry = {
			...description.geometry,
			...geometry,
		}
	}

	public setTextures(textures: Record<string, string>) {
		const description = this.resource.MCClientEntity.description
		description.textures = {
			...description.textures,
			...textures,
		}
	}

	// TODO: Add missing methods

	public build() {
		return this.resource
	}
}
