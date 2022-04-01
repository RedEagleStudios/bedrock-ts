import { BPAnimControllerBuilder } from "../../builder/animation_controller/BPAnimControllerBuilder"
import { BPAnimController } from "./BPAnimController"

export interface CoreAnimController {
	fileName: string
	createBP(builder: BPAnimControllerBuilder): BPAnimController
}
