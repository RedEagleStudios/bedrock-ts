import { RenderController, RPEntity, SpawnEgg } from "../../bedrock/entity/RPEntity"
import { RawQuery } from "../../bedrock/query/Query"
import { AnimationId } from "../../bedrock/shared/AnimationId"
import { AnimControllerId } from "../../bedrock/shared/AnimControllerId"
import { GeometryId } from "../../bedrock/shared/GeometryId"
import { Identifier } from "../../bedrock/shared/Identifier"
import { assign } from "../../utils/assign"
import { Builder } from "../Builder"
import { QueryBuilder } from "../query/QueryBuilder"

export class RPEntityBuilder extends Builder<RPEntity> {
	constructor(identifier: Identifier, dir?: string) {
		const name = identifier.removeNamespace()
		super({
			format_version: "1.10.0",
			MCClientEntity: {
				description: {
					identifier: identifier,
					materials: {
						default: "entity_alphatest",
					},
					textures: {
						default: `textures/entity/${identifier.toFilePath(dir)}`,
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
		})
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
		const description = this.object.MCClientEntity.description
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

	public setMaterials(materials: Record<string, string>) {
		this.object.MCClientEntity.description.materials ??= {}
		assign(this.object.MCClientEntity.description.materials, materials)
	}

	public setGeometry(geometry: Record<string, GeometryId>) {
		this.object.MCClientEntity.description.geometry ??= {}
		assign(this.object.MCClientEntity.description.geometry, geometry)
	}

	public setTextures(textures: Record<string, string>) {
		this.object.MCClientEntity.description.textures ??= {}
		assign(this.object.MCClientEntity.description.textures, textures)
	}

	public setRenderControllers(render_controllers: RenderController[]) {
		this.object.MCClientEntity.description.render_controllers = render_controllers
	}

	public addRenderController(render_controller: RenderController) {
		this.object.MCClientEntity.description.render_controllers ??= []
		this.object.MCClientEntity.description.render_controllers.push(render_controller)
	}

	public setSpawnEgg(spawn_egg: SpawnEgg) {
		this.object.MCClientEntity.description.spawn_egg = spawn_egg
	}
}
