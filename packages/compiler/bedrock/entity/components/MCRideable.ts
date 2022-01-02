import { Vector3 } from "../../../types/Vector"

export interface MCRideable {
	controllingSeat?: number
	crouchingSkipInteract?: boolean
	familyTypes?: string[]
	interactText?: string
	pullInEntities?: boolean
	riderCanInteract?: boolean
	seatCount?: number
	seats?: MCRideableSeat[]
}

export interface MCRideableSeat {
	lockRiderRotation?: number
	maxRiderCount?: number
	minRiderCount?: number
	position?: Vector3
	rotateRiderBy?: number
}
