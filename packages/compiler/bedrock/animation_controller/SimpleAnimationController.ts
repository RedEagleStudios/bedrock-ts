import { BPAnimationController } from "./BPAnimationController"

export abstract class CoreAnimationController {
	public abstract fileName: string
	public abstract createAnimationController(): BPAnimationController
}
