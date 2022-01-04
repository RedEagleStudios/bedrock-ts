import { CoreAnimation } from "../animation/SimpleAnimation"
import { CoreAnimationController } from "../animation_controller/SimpleAnimationController"
import { CoreEntity } from "../entity/CoreEntity"

export interface MCAddon {
	packName: string
	animations: CoreAnimation[]
	animationControllers: CoreAnimationController[]
	entities: CoreEntity[]
}
