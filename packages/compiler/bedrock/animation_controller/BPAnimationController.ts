type FormatVersion = "1.10.0"

export interface BPAnimationController {
	format_version: FormatVersion
	animation_controllers: Record<AnimationControllerKey, AnimationControllers>
}

export type AnimationControllerKey = `controller.animation.${string}`

export interface AnimationControllers {
	initial_state?: string
	states?: Record<string, AnimationControllerState>
}

export interface AnimationControllerState {
	animations?: (string | Record<string, string>)[]
	on_entry?: string[]
	on_exit?: string[]
	transitions?: Record<string, string>[]
}
