import { AnimationKey } from "../keys/AnimationKey"

type FormatVersion = "1.10.0"

export interface BPAnimation {
	format_version: FormatVersion
	animations: AnimationRecord
}

export interface AnimationRecord {
	[key: AnimationKey]: Animation
}

export interface Animation {
	animation_length?: number
	loop?: boolean
	timeline?: AnimationTimeline
}

export interface AnimationTimeline {
	[key: number]: string[]
}
