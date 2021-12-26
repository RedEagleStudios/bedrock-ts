import { MCAddon } from "../bedrock/minecraft/MCAddon"
import { Generator } from "./generator/Generator"

export function makeAddon(addon: MCAddon) {
	new Generator(addon).generate()
}
