import { BPAnimationController } from "./BPAnimationController"

export interface CoreAnimationController {
	fileName: string
	createAnimationController(): BPAnimationController
}
