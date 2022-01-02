export interface MCEquipment {
	table?: string
	slot_drop_chance?: MCEquipmentSlotDropChance[]
}

export interface MCEquipmentSlotDropChance {
	drop_chance?: number
	slot?: string
}
