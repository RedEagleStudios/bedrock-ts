import { GeometryKey } from "../keys/GeometryKey"
import { Identifier } from "../keys/Identifier"
import { RenderControllerKey } from "../keys/RenderControllerKey"
import { Animate } from "../shared/Animate"
import { AnimationsRecord } from "../shared/AnimationsRecord"

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
	animations?: AnimationsRecord
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
