import { BPAnimation, BPAnimationItem } from "../../bedrock/animation/BPAnimation"
import { assign } from "../../utils/assign"
import { Builder } from "../Builder"

export class BPAnimationBuilder extends Builder<BPAnimation> {
	private animation: BPAnimationItem

	constructor(name: string) {
		const id = `animation.${name}`
		super({
			format_version: "1.10.0",
			animations: {
				[id]: {
					loop: false,
					timeline: {},
				},
			},
		})
		this.animation = this.object.animations[id]
	}

	public setLoop(bool: boolean) {
		this.animation.loop = bool
	}

	public setLength(length: number) {
		this.animation.animation_length = length
	}

	public setTimeline(timeline: Record<number, string[]>) {
		assign(this.animation.timeline, timeline)
	}

	public getTimeline(key: number): string[] | undefined {
		return this.animation.timeline[key]
	}
}
