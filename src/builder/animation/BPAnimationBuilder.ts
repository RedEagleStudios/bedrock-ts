import { AnimationTimeline, BPAnimation, BPAnimationItem } from "../../bedrock/animation/BPAnimation"
import { AnimationId } from "../../bedrock/shared/AnimationId"

export class BPAnimationBuilder {
	private id: AnimationId
	private controller: BPAnimation

	constructor(id: AnimationId, value?: BPAnimationItem) {
		this.id = id
		this.controller = {
			format_version: "1.10.0",
			animations: {
				[id]: value ?? {
					timeline: {},
				},
			},
		}
	}

	public build(): BPAnimation {
		return this.controller
	}

	public setTimelines(timelines: AnimationTimeline) {
		const item = this.controller.animations[this.id]
		item.timeline = {
			...item.timeline,
			...timelines,
		}
	}

	public getTimeline(key: number): string[] {
		const item = this.controller.animations[this.id]
		return item.timeline[key]
	}
}
