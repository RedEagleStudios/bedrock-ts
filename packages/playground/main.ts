import { SimpleEntity } from "../compiler/bedrock/entity/SimpleEntity"
import { MCManifest } from "../compiler/bedrock/manifest/MCManifest"
import { MCAddon } from "../compiler/bedrock/minecraft/MCAddon"
import { makeAddon } from "../compiler/src/main"
import { Test } from "./entity/Test"

export class Playground implements MCAddon {
	manifest: MCManifest = {
		name: "Playground",
	}
	entities: SimpleEntity[] = [new Test()]
}

makeAddon(new Playground())
