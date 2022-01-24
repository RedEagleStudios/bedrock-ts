import { AnimationId } from "../shared/AnimationId"

type FormatVersion = "1.10.0"

export interface BPAnimation {
	format_version: FormatVersion
	animations: BPAnimationRecord
}

export interface BPAnimationRecord {
	[key: AnimationId]: BPAnimationItem
}

export interface BPAnimationItem {
	animation_length?: number
	loop?: boolean
	timeline: AnimationTimeline
}

export interface AnimationTimeline {
	[key: number]: string[]
}
