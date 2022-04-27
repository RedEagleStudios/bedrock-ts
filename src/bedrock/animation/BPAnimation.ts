type FormatVersion = "1.10.0"

export interface BPAnimation {
	format_version: FormatVersion
	animations: Record<string, BPAnimationItem>
}

export interface BPAnimationItem {
	animation_length?: number
	loop?: boolean
	timeline: Record<number, string[]>
}
