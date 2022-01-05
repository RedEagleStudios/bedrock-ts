import {
	AnimationController,
	AnimationControllerRecord,
	BPAnimationController,
} from "../../bedrock/animation_controller/BPAnimationController"
import { AnimationControllerKey } from "../../bedrock/keys/AnimationControllerKey"

export class BPAnimationControllerBuilder {
	constructor(
		private controller: BPAnimationController = {
			format_version: "1.10.0",
			animation_controllers: {},
		}
	) {}

	public build(): BPAnimationController {
		return this.controller
	}

	public setItem(item: AnimationControllerRecord) {
		this.controller.animation_controllers = {
			...this.controller.animation_controllers,
			...item,
		}
	}

	public getItem(item: AnimationControllerKey): AnimationController {
		return this.controller.animation_controllers[item]
	}
}
