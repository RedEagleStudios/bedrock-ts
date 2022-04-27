import { CoreAnimation } from "../animation/CoreAnimation"
import { CoreAnimController } from "../animation_controller/CoreAnimController"
import { CoreBlock } from "../block/CoreBlock"
import { CoreDialogue } from "../dialogue/CoreDialogue"
import { CoreEntity } from "../entity/CoreEntity"
import { CoreItem } from "../item/CoreItem"
import { CoreLootTable } from "../loot_table/CoreLootTable"
import { MCManifestUUIDs } from "../manifest/MCManifest"
import { CoreRecipe } from "../recipe/CoreRecipe"
import { CoreRenderController } from "../render_controller/CoreRenderController"
import { CoreTrading } from "../trading/CoreTrading"

export interface MCAddon {
	packName: string
	animations?: CoreAnimation[]
	animControllers?: CoreAnimController[]
	blocks?: CoreBlock[]
	dialogues?: CoreDialogue[]
	entities?: CoreEntity[]
	loot_tables?: CoreLootTable[]
	items?: CoreItem[]
	recipes?: CoreRecipe[]
	render_controllers?: CoreRenderController[]
	tradings?: CoreTrading[]
	uuids?: MCManifestUUIDs
}
