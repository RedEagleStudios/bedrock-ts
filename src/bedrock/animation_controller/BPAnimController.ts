import { StringOrRecord } from "../../types/StringOrRecord"

type FormatVersion = "1.10.0"

export interface BPAnimController {
  format_version: FormatVersion
  animation_controllers: Record<string, BPAnimControllerItem>
}

export interface BPAnimControllerItem {
  initial_state?: string
  states: Record<string, BPAnimControllerState>
}

export interface BPAnimControllerState {
  animations?: StringOrRecord[]
  on_entry?: string[]
  on_exit?: string[]
  transitions?: Record<string, string>[]
}
