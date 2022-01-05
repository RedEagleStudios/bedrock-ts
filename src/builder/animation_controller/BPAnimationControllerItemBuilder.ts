import {
	AnimationController,
	AnimationControllerState,
	StateRecord,
} from "../../bedrock/animation_controller/BPAnimationController"

export class BPAnimationControllerItemBuilder {
	constructor(
		private controllerItem: AnimationController = {
			states: {},
		}
	) {}

	public build(): AnimationController {
		return this.controllerItem
	}

	public setStates(states: StateRecord) {
		const controller = this.controllerItem
		controller.states = {
			...controller.states,
			...states,
		}
	}

	public getState(state: string): AnimationControllerState {
		const controller = this.controllerItem
		return controller.states[state]
	}
}
