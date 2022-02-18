import {
	BPAnimController,
	BPAnimControllerItem,
	BPAnimControllerState,
	BPAnimControllerStateRecord,
} from "../../bedrock/animation_controller/BPAnimController"
import { AnimControllerId } from "../../bedrock/shared/AnimControllerId"
import { assign } from "../../utils/assign"
import { Builder } from "../Builder"

export class BPAnimControllerBuilder extends Builder<BPAnimController> {
	private controller: BPAnimControllerItem

	constructor(name: string) {
		const id: AnimControllerId = `controller.animation.${name}`
		super({
			format_version: "1.10.0",
			animation_controllers: {
				[id]: {
					states: {},
				},
			},
		})
		this.controller = this.object.animation_controllers[id]
	}

	public setStates(states: BPAnimControllerStateRecord) {
		assign(this.controller, states)
	}

	public getState(state: string): BPAnimControllerState {
		return this.controller.states[state]
	}
}
