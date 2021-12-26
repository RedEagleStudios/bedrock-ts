import { SimpleEntity } from "../compiler/bedrock/entity/SimpleEntity"
import { MCManifest } from "../compiler/bedrock/manifest/MCManifest"
import { MCAddon } from "../compiler/bedrock/minecraft/MCAddon"
import { makeAddon } from "../compiler/src/main"
import { Dummy } from "./entity/dummy"

export class Playground implements MCAddon {
	manifest: MCManifest = {
		name: "Playground",
	}
	entities: SimpleEntity[] = [new Dummy()]
}

makeAddon(new Playground())
