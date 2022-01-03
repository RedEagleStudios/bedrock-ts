import { MCAddon } from "../compiler/bedrock/minecraft/MCAddon"
import { makeAddon } from "../compiler/main"
import { StaticEntity } from "./entity/base/StaticEntity"
import { Dummy } from "./entity/dummy"

const staticEntities = ["idk", "test"].map((name) => new StaticEntity(name))

const playground: MCAddon = {
	packName: "Playground",
	entities: [new Dummy(), ...staticEntities],
}

makeAddon(playground)
