import { Identifier } from "../shared/Identifier"

export interface BPBlockComponents {
  MCLoot?: string
  MCDestroyTime?: number
  MCExplosionResistance?: number
  MCFriction?: number
  MCFlammable?: {
    flame_odds?: number
    burn_odds?: number
  }
  MCMapColor?: `#${string}`
  MCBlockLightAbsorption?: number
  MCBlockLightEmission?: number
}

export interface BPBlockDescription {
  identifier: Identifier
  is_experimental?: boolean
  register_to_creative_menu?: boolean
}

export interface MCBlock {
  description: BPBlockDescription
  components: BPBlockComponents
}

export interface BPBlock {
  format_version: "1.12.0"
  MCBlock: MCBlock
}
