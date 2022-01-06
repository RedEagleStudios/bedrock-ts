import { MCCamera, MCFood, MCSeed } from "."

export interface BPItemComponents {
	MCBlock?: string
	MCCamera?: MCCamera
	MCFoil?: boolean
	MCFood?: MCFood
	MCHandEquipped?: boolean
	MCMaxDamage?: number
	MCMaxStackSize?: number
	MCSeed?: MCSeed
	MCStackedByData?: boolean
	MCUseDuration?: number
}
