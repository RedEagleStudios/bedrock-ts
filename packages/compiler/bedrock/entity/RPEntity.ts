import { Identifier } from "../identifier/Identifier"

type FormatVersion = "1.10.0"

export type RPEntity = {
	formatVersion: FormatVersion
	MCClientEntity: MCClientEntity
}

export type MCClientEntity = {
	description: RPDescription
}

export type RPDescription = {
	identifier: Identifier
	materials?: Record<string, string>
	textures?: Record<string, string>
	geometry?: Geometry
	animations?: Animations
	scripts?: Scripts
	renderControllers?: RenderControllers
}

export type Geometry = {
	[k: string]: `geometry.${string}`
}

export type Animations = {
	[k: string]: `animation.${string}` | `controller.animation.${string}`
}

export type Scripts = {
	initialize?: string[]
	preAnimation?: string[]
	animate?: Animate
}

export type Animate = (string | Record<string, string>)[]

export type RenderControllers = `controller.render.${string}`[]
