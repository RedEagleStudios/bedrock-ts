import { BPAnimation, BPAnimationItem, BPAnimationRecord } from "../../bedrock/animation/BPAnimation"
import { AnimationKey } from "../../bedrock/keys/AnimationKey"

export class BPAnimationBuilder {
	constructor(
		private animation: BPAnimation = {
			format_version: "1.10.0",
			animations: {},
		}
	) {}

	public build(): BPAnimation {
		return this.animation
	}

	public setItems(items: BPAnimationRecord) {
		this.animation.animations = {
			...this.animation.animations,
			...items,
		}
	}

	public getItem(key: AnimationKey): BPAnimationItem {
		return this.animation.animations[key]
	}
}
