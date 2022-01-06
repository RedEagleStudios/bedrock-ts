import { AnimControllerKey } from "../keys/AnimControllerKey"
import { Animate } from "../shared/Animate"

type FormatVersion = "1.10.0"

export interface BPAnimController {
	format_version: FormatVersion
	animation_controllers: BPAnimControllerRecord
}

export interface BPAnimControllerRecord {
	[key: AnimControllerKey]: BPAnimControllerItem
}

export interface BPAnimControllerItem {
	initial_state?: string
	states: BPAnimControllerStateRecord
}

export interface BPAnimControllerStateRecord {
	[key: string]: BPAnimControllerState
}

export interface BPAnimControllerState {
	animations?: Animate[]
	on_entry?: string[]
	on_exit?: string[]
	transitions?: Record<string, string>[]
}
