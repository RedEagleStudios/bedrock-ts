import {
	BPAnimController,
	BPAnimControllerItem,
	BPAnimControllerState,
	BPAnimControllerStateRecord,
} from "../../bedrock/animation_controller/BPAnimController"
import { AnimControllerId } from "../../bedrock/shared/AnimControllerId"

export class BPAnimControllerBuilder {
	private id: AnimControllerId
	private controller: BPAnimController

	constructor(id: AnimControllerId, value?: BPAnimControllerItem) {
		this.id = id
		this.controller = {
			format_version: "1.10.0",
			animation_controllers: {
				[id]: value ?? {
					states: {},
				},
			},
		}
	}

	public build(): BPAnimController {
		return this.controller
	}

	public setStates(states: BPAnimControllerStateRecord) {
		const item = this.controller.animation_controllers[this.id]
		item.states = {
			...item.states,
			...states,
		}
	}

	public getState(state: string): BPAnimControllerState {
		const item = this.controller.animation_controllers[this.id]
		return item.states[state]
	}
}
