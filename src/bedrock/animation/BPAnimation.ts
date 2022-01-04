type FormatVersion = "1.10.0"

export type AnimationKey = `animation.${string}`

export interface Animations {
	animation_length?: number
	loop?: boolean
	timeline?: Record<number, string[]>
}

export interface BPAnimation {
	format_version: FormatVersion
	animations: Record<AnimationKey, Animations>
}
