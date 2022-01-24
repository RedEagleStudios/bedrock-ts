import { Animate } from "../shared/Animate"
import { AnimControllerId } from "../shared/AnimControllerId"

type FormatVersion = "1.10.0"

export interface BPAnimController {
	format_version: FormatVersion
	animation_controllers: BPAnimControllerRecord
}

export interface BPAnimControllerRecord {
	[key: AnimControllerId]: BPAnimControllerItem
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
