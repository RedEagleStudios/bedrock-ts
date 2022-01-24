import {
	BPAnimController,
	BPAnimControllerItem,
	BPAnimControllerRecord,
} from "../../bedrock/animation_controller/BPAnimController"
import { AnimControllerId } from "../../bedrock/shared/AnimControllerId"

export class BPAnimControllerBuilder {
	constructor(
		private controller: BPAnimController = {
			format_version: "1.10.0",
			animation_controllers: {},
		}
	) {}

	public build(): BPAnimController {
		return this.controller
	}

	public setItems(items: BPAnimControllerRecord) {
		this.controller.animation_controllers = {
			...this.controller.animation_controllers,
			...items,
		}
	}

	public getItem(key: AnimControllerId): BPAnimControllerItem {
		return this.controller.animation_controllers[key]
	}
}
