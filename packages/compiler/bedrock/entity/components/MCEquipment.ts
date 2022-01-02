export interface MCEquipment {
	table?: string
	slotDropChance?: MCEquipmentSlotDropChance[]
}

export interface MCEquipmentSlotDropChance {
	dropChance?: number
	slot?: string
}
