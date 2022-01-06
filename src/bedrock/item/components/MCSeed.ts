export type MCSeedPlantAtFace = "DOWN" | "UP"

export interface MCSeed {
	crop_result?: string
	plant_at?: string[]
	plant_at_any_solid_surface?: boolean
	plant_at_face?: MCSeedPlantAtFace
}
