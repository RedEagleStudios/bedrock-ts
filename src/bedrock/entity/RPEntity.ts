import { AnimationKey } from "../animation/BPAnimation"
import { AnimationControllerKey } from "../animation_controller/BPAnimationController"
import { Identifier } from "../identifier/Identifier"

type FormatVersion = "1.10.0"

export interface RPEntity {
	format_version: FormatVersion
	MCClientEntity: MCClientEntity
}

export interface MCClientEntity {
	description: RPDescription
}

export interface RPDescription {
	identifier: Identifier
	materials?: Record<string, string>
	textures?: Record<string, string>
	geometry?: Record<GeometryKey, string>
	animations?: Record<AnimationKey | AnimationControllerKey, string>
	scripts?: Scripts
	render_controllers?: RenderControllers[]
}

export type GeometryKey = `geometry.${string}`

export interface Scripts {
	initialize?: string[]
	pre_animation?: string[]
	animate?: Animate[]
}

export type Animate = string | Record<string, string>

export type RenderControllers = `controller.render.${string}`
