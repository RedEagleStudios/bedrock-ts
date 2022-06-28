import { Vector3 } from "../../../types/Vector3"

export interface MCCustomHitTestHitbox {
  height?: number
  pivot?: Vector3
  width?: number
}

export interface MCCustomHitTest {
  hitboxes?: MCCustomHitTestHitbox[]
}
