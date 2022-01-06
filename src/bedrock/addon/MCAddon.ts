import { CoreAnimation } from "../animation/CoreAnimation"
import { CoreAnimController } from "../animation_controller/CoreAnimController"
import { CoreEntity } from "../entity/CoreEntity"
import { CoreItem } from "../item/CoreItem"
import { MCManifestUUIDs } from "../manifest/MCManifest"

export interface MCAddon {
	packName: string
	animations: CoreAnimation[]
	animControllers: CoreAnimController[]
	entities: CoreEntity[]
	items: CoreItem[]
	uuids?: MCManifestUUIDs
}
