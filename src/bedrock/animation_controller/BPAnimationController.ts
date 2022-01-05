import { AnimationControllerKey } from "../keys/AnimationControllerKey"

type FormatVersion = "1.10.0"

export interface BPAnimationController {
	format_version: FormatVersion
	animation_controllers: AnimationControllerRecord
}

export interface AnimationControllerRecord {
	[key: AnimationControllerKey]: AnimationController
}

export interface AnimationController {
	initial_state?: string
	states?: StateRecord
}

export interface StateRecord {
	[key: string]: AnimationControllerState
}

export interface AnimationControllerState {
	animations?: (string | Record<string, string>)[]
	on_entry?: string[]
	on_exit?: string[]
	transitions?: Record<string, string>[]
}
