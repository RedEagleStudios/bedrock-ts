import { MCAddon } from "../bedrock/minecraft/MCAddon"
import "./extensions/string"
import { AddonGenerator } from "./generator/addonGenerator"

export function makeAddon(addon: MCAddon) {
	new AddonGenerator(addon).generate()
}
