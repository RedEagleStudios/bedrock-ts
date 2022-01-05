import {
	BPAnimControllerItem,
	BPAnimControllerState,
	BPAnimControllerStateRecord,
} from "../../bedrock/animation_controller/BPAnimController"

export class BPAnimControllerItemBuilder {
	constructor(
		private controllerItem: BPAnimControllerItem = {
			states: {},
		}
	) {}

	public build(): BPAnimControllerItem {
		return this.controllerItem
	}

	public setStates(states: BPAnimControllerStateRecord) {
		this.controllerItem.states = {
			...this.controllerItem.states,
			...states,
		}
	}

	public getState(state: string): BPAnimControllerState {
		return this.controllerItem.states[state]
	}
}
