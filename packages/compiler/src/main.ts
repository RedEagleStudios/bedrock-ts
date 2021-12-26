import { MCAddon } from "../bedrock/minecraft/MCAddon"
import { Generator } from "./generator/_generator"

export function makeAddon(addon: MCAddon) {
	new Generator(addon).generate()
}
