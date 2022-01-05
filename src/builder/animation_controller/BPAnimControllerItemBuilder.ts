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
		const controller = this.controllerItem
		controller.states = {
			...controller.states,
			...states,
		}
	}

	public getState(state: string): BPAnimControllerState {
		const controller = this.controllerItem
		return controller.states[state]
	}
}
