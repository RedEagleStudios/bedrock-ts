import { BPAnimationBuilder } from "../../builder/animation/BPAnimationBuilder"
import { BPAnimation } from "./BPAnimation"

export interface CoreAnimation {
	name: string
	createBP(builder: BPAnimationBuilder): BPAnimation
}
