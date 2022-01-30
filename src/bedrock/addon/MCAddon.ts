import { CoreAnimation } from "../animation/CoreAnimation"
import { CoreAnimController } from "../animation_controller/CoreAnimController"
import { CoreBlock } from "../block/CoreBlock"
import { CoreEntity } from "../entity/CoreEntity"
import { CoreItem } from "../item/CoreItem"
import { MCManifestUUIDs } from "../manifest/MCManifest"
import { CoreRecipe } from "../recipe/CoreRecipe"

export interface MCAddon {
	packName: string
	animations: CoreAnimation[]
	animControllers: CoreAnimController[]
	blocks: CoreBlock[]
	entities: CoreEntity[]
	items: CoreItem[]
	recipes: CoreRecipe[]
	uuids?: MCManifestUUIDs
}
