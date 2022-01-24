import { Animate } from "../shared/Animate"
import { AnimationsRecord } from "../shared/AnimationsRecord"
import { GeometryId } from "../shared/GeometryId"
import { Identifier } from "../shared/Identifier"
import { RenderControllerId } from "../shared/RenderControllerId"

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
	geometry?: Record<GeometryId, string>
	animations?: AnimationsRecord
	scripts?: Scripts
	render_controllers?: (RenderControllerId | RenderControllerRecord)[]
}

export interface RenderControllerRecord {
	[key: RenderControllerId]: string
}

export interface Scripts {
	initialize?: string[]
	pre_animation?: string[]
	animate?: Animate[]
}
