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

export interface Scripts {
	scale?: `${number}`
	initialize?: string[]
	pre_animation?: string[]
	animate?: Animate[]
}

export interface SpawnEgg {
	base_color?: string
	overlay_color?: string
	texture?: string
	texture_index?: number
}

export interface RenderControllerRecord {
	[key: RenderControllerId]: string
}

export type RenderController = RenderControllerId | RenderControllerRecord

export interface RPDescription {
	identifier: Identifier
	materials?: Record<string, string>
	textures?: Record<string, string>
	geometry?: Record<string, GeometryId>
	animations?: AnimationsRecord
	scripts?: Scripts
	particle_effects?: Record<string, string>
	particle_emitters?: Record<string, string>
	sound_effects?: Record<string, string>
	spawn_egg?: SpawnEgg
	render_controllers?: RenderController[]
	enable_attachables?: boolean
	hide_armor?: boolean
}
