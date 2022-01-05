import { AnimationTimeline, BPAnimationItem } from "../../bedrock/animation/BPAnimation"

export class BPAnimationItemBuilder {
	constructor(
		private animationItem: BPAnimationItem = {
			timeline: {},
		}
	) {}

	public build(): BPAnimationItem {
		return this.animationItem
	}

	public setTimelines(timelines: AnimationTimeline) {
		const animation = this.animationItem
		animation.timeline = {
			...animation.timeline,
			...timelines,
		}
	}

	public getTimeline(key: number): string[] {
		const animation = this.animationItem
		return animation.timeline[key]
	}
}
