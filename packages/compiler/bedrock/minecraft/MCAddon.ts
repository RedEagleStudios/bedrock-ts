import { SimpleEntity } from "../entity/SimpleEntity"
import { MCManifest } from "../manifest/MCManifest"

export interface MCAddon {
	manifest: MCManifest
	entities: SimpleEntity[]
}
