import { CoreAnimation } from "../animation/CoreAnimation"
import { CoreAnimationController } from "../animation_controller/CoreAnimationController"
import { CoreEntity } from "../entity/CoreEntity"
import { MCManifestUUIDs } from "../manifest/MCManifest"

export interface MCAddon {
	packName: string
	animations: CoreAnimation[]
	animationControllers: CoreAnimationController[]
	entities: CoreEntity[]
	uuids?: MCManifestUUIDs
}
