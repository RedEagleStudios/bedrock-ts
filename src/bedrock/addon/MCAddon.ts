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

type List<T> = Array<T | T[]>

export interface MCAddon {
	packName: string
	animations?: List<CoreAnimation>
	animControllers?: List<CoreAnimController>
	blocks?: List<CoreBlock>
	dialogues?: List<CoreDialogue>
	entities?: List<CoreEntity>
	loot_tables?: List<CoreLootTable>
	items?: List<CoreItem>
	recipes?: List<CoreRecipe>
	render_controllers?: List<CoreRenderController>
	tradings?: List<CoreTrading>
	uuids?: MCManifestUUIDs
}
