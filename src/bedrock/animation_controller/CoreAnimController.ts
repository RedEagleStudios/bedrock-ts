import { BPAnimController } from "./BPAnimController"

export interface CoreAnimController {
	fileName: string
	createAnimController(): BPAnimController
}
