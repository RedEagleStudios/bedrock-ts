import { RenderController } from "./RenderController"

export interface CoreRenderController {
	dir?: string
	fileName: string
	create(): RenderController
}
