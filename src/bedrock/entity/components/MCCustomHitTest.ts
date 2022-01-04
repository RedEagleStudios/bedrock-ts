export interface MCCustomHitTestHitbox {
	height?: number
	pivot?: Vector3
	width?: number
}

export interface MCCustomHitTest {
	hitboxes?: MCCustomHitTestHitbox[]
}
