import { MCAddon } from "../compiler/bedrock/minecraft/MCAddon"
import { makeAddon } from "../compiler/src/main"
import { Dummy } from "./entity/dummy"

const playground: MCAddon = {
	packName: "Playground",
	entities: [new Dummy()],
}

makeAddon(playground)
