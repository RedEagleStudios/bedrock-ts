import { StringOrRecord } from "../../types/StringOrRecord"
import { Identifier } from "../shared/Identifier"

type FormatVersion = "1.10.0"

export interface RPEntity {
  format_version: FormatVersion
  MCClientEntity: MCClientEntity
}

export interface MCClientEntity {
  description: RPDescription
}

export interface Scripts {
  scale?: `${number}`
  initialize?: string[]
  pre_animation?: string[]
  animate?: StringOrRecord[]
}

export interface SpawnEgg {
  base_color?: string
  overlay_color?: string
  texture?: string
  texture_index?: number
}

export interface RPDescription {
  identifier: Identifier
  materials?: Record<string, string>
  textures?: Record<string, string>
  geometry?: Record<string, string>
  animations?: Record<string, string>
  scripts?: Scripts
  particle_effects?: Record<string, string>
  particle_emitters?: Record<string, string>
  sound_effects?: Record<string, string>
  spawn_egg?: SpawnEgg
  render_controllers?: StringOrRecord[]
  enable_attachables?: boolean
  hide_armor?: boolean
}
