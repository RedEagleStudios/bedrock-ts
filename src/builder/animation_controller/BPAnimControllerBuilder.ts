import {
  BPAnimController,
  BPAnimControllerItem,
  BPAnimControllerState,
} from "../../bedrock/animation_controller/BPAnimController"
import { assign } from "../../utils/assign"
import { Builder } from "../Builder"

export class BPAnimControllerBuilder extends Builder<BPAnimController> {
  private controller: BPAnimControllerItem

  constructor(name: string) {
    const id = `controller.animation.${name}`
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

  public setInitialState(state: string) {
    this.controller.initial_state = state
  }

  public setStates(states: Record<string, BPAnimControllerState>) {
    assign(this.controller.states, states)
  }

  public getState(state: string): BPAnimControllerState {
    return this.controller.states[state]
  }
}
