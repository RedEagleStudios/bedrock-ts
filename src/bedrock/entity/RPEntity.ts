import { Identifier } from "../identifier/Identifier"
import { AnimationControllerKey } from "../keys/AnimationControllerKey"
import { AnimationKey } from "../keys/AnimationKey"
import { GeometryKey } from "../keys/GeometryKey"
import { RenderControllerKey } from "../keys/RenderControllerKey"

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
	animations?: Record<string, AnimationKey | AnimationControllerKey>
	scripts?: Scripts
	render_controllers?: (RenderControllerKey | RenderControllerRecord)[]
}

export interface RenderControllerRecord {
	[key: RenderControllerKey]: string
}

export interface Scripts {
	initialize?: string[]
	pre_animation?: string[]
	animate?: Animate[]
}

export type Animate = string | Record<string, string>
