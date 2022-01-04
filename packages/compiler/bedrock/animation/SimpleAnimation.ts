import { BPAnimation } from "./BPAnimation"

export abstract class CoreAnimation {
	public abstract fileName: string
	public abstract createAnimation(): BPAnimation
}
