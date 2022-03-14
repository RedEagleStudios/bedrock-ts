import { appendFileSync, writeFileSync } from "fs"
import { mkdirSync } from "fs-extra"
import { recursive } from "../constants/fsOptions"
import { PATH_TEMP } from "../constants/paths"

export function writeFile(path: string, data: string) {
	const lastSlash = path.lastIndexOf("/")
	if (lastSlash !== -1) {
		const dirPath = path.substring(0, lastSlash)
		mkdirSync(dirPath, recursive)
	}
	writeFileSync(path, data)
	if (path.indexOf("manifest") === -1) {
		appendFileSync(PATH_TEMP, path + "\n")
	}
}
