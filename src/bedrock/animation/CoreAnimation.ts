import { BPAnimation } from "./BPAnimation"

export interface CoreAnimation {
	fileName: string
	createAnimation(): BPAnimation
}
