import { RPEntity, SpawnEgg } from "../../bedrock/entity/RPEntity"
import { Identifier } from "../../bedrock/shared/Identifier"
import { LiteralUnion } from "../../types/LiteralUnion"
import { StringOrRecord } from "../../types/StringOrRecord"
import { assign } from "../../utils/assign"
import { Builder } from "../Builder"

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
   * @returns RPEntity Identifier
   */
  public getIdentifier(): Identifier {
    return this.object.MCClientEntity.description.identifier
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
  public addAnimation(animationName: string, animationId: string, playCondition?: LiteralUnion<"always">): void {
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

  public setScale(scale: number) {
    const description = this.object.MCClientEntity.description
    description.scripts ??= {}
    description.scripts.scale = `${scale}`
  }

  public setPreAnimation(pre_animation: string[]) {
    const description = this.object.MCClientEntity.description
    description.scripts ??= {}
    description.scripts.pre_animation = pre_animation
  }

  public addPreAnimation(pre_animation: string) {
    const description = this.object.MCClientEntity.description
    description.scripts ??= {}
    description.scripts.pre_animation ??= []
    description.scripts.pre_animation.push(pre_animation)
  }

  public setInitialize(initialize: string[]) {
    const description = this.object.MCClientEntity.description
    description.scripts ??= {}
    description.scripts.initialize = initialize
  }

  public addInitialize(initialize: string) {
    const description = this.object.MCClientEntity.description
    description.scripts ??= {}
    description.scripts.initialize ??= []
    description.scripts.initialize.push(initialize)
  }

  public setMaterials(materials: Record<string, string>) {
    this.object.MCClientEntity.description.materials ??= {}
    assign(this.object.MCClientEntity.description.materials, materials)
  }

  public setGeometry(geometry: Record<string, string>) {
    this.object.MCClientEntity.description.geometry ??= {}
    assign(this.object.MCClientEntity.description.geometry, geometry)
  }

  public setTextures(textures: Record<string, string>) {
    this.object.MCClientEntity.description.textures ??= {}
    assign(this.object.MCClientEntity.description.textures, textures)
  }

  public setParticleEffects(particle_effects: Record<string, string>) {
    this.object.MCClientEntity.description.particle_effects ??= {}
    assign(this.object.MCClientEntity.description.particle_effects, particle_effects)
  }

  public setParticleEmitters(particle_emitters: Record<string, string>) {
    this.object.MCClientEntity.description.particle_emitters ??= {}
    assign(this.object.MCClientEntity.description.particle_emitters, particle_emitters)
  }

  public setSoundEffects(sound_effects: Record<string, string>) {
    this.object.MCClientEntity.description.sound_effects ??= {}
    assign(this.object.MCClientEntity.description.sound_effects, sound_effects)
  }

  public setRenderControllers(render_controllers: StringOrRecord[]) {
    this.object.MCClientEntity.description.render_controllers = render_controllers
  }

  public addRenderController(render_controller: StringOrRecord) {
    this.object.MCClientEntity.description.render_controllers ??= []
    this.object.MCClientEntity.description.render_controllers.push(render_controller)
  }

  public setSpawnEgg(spawn_egg: SpawnEgg) {
    this.object.MCClientEntity.description.spawn_egg = spawn_egg
  }

  public enableAttachables(value: boolean) {
    this.object.MCClientEntity.description.enable_attachables = value
  }

  public hideArmor(value: boolean) {
    this.object.MCClientEntity.description.hide_armor = value
  }
}
