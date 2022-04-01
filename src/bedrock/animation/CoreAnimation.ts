import { BPAnimationBuilder } from "../../builder/animation/BPAnimationBuilder"
import { BPAnimation } from "./BPAnimation"

export interface CoreAnimation {
	fileName: string
	createBP(builder: BPAnimationBuilder): BPAnimation
}
