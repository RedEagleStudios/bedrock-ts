import {
	BPAnimController,
	BPAnimControllerItem,
	BPAnimControllerRecord,
} from "../../bedrock/animation_controller/BPAnimController"
import { AnimControllerKey } from "../../bedrock/keys/AnimControllerKey"

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

	public setItems(item: BPAnimControllerRecord) {
		this.controller.animation_controllers = {
			...this.controller.animation_controllers,
			...item,
		}
	}

	public getItem(item: AnimControllerKey): BPAnimControllerItem {
		return this.controller.animation_controllers[item]
	}
}
