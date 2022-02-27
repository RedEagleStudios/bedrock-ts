import { writeFileSync } from "fs"
import { mkdirSync } from "fs-extra"
import { recursive } from "../constants/fsOptions"

export function writeFile(path: string, data: string) {
	const lastSlash = path.lastIndexOf("/")
	if (lastSlash !== -1) {
		const dirPath = path.substring(0, lastSlash)
		mkdirSync(dirPath, recursive)
	}
	writeFileSync(path, data)
}
