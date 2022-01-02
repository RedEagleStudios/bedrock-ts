import { Vector3 } from "../../../types/Vector"

export interface MCCustomHitTest {
	hitboxes?: MCCustomHitTestHitbox[]
}

export interface MCCustomHitTestHitbox {
	width?: number
	height?: number
	pivot?: Vector3
}
