export interface MCEquipmentSlotChance {
  drop_chance: number
  slot: string
}

export interface MCEquipment {
  slot_drop_chance?: MCEquipmentSlotChance[]
  table: string
}
