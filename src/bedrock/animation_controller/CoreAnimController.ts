import { BPAnimControllerBuilder } from "../../builder/animation_controller/BPAnimControllerBuilder"
import { BPAnimController } from "./BPAnimController"

export interface CoreAnimController {
	name: string
	createBP(builder: BPAnimControllerBuilder): BPAnimController
}
