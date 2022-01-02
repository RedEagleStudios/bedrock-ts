import { Identifier } from "../identifier/Identifier"

type FormatVersion = "1.10.0"

export interface RPEntity {
	formatVersion: FormatVersion
	MCClientEntity: MCClientEntity
}

export interface MCClientEntity {
	description: RPDescription
}

export interface RPDescription {
	identifier: Identifier
	materials?: Record<string, string>
	textures?: Record<string, string>
	geometry?: Geometry
	animations?: Animations
	scripts?: Scripts
	renderControllers?: RenderControllers[]
}

export interface Geometry {
	[key: string]: `geometry.${string}`
}

export interface Animations {
	[key: string]: `animation.${string}` | `controller.animation.${string}`
}

export interface Scripts {
	initialize?: string[]
	preAnimation?: string[]
	animate?: Animate[]
}

export type Animate = string | Record<string, string>

export type RenderControllers = `controller.render.${string}`
