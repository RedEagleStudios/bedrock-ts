import { mkdirSync, writeFileSync } from "fs"
import _ from "lodash"
import { recursive } from "../constants/fsOptions"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function writeJson(path: string, object: Record<string, any>): void {
	object = _.transform(object, function iteratee(result, value, key) {
		if (typeof key === "string") key = formatKey(key)
		if (typeof value === "object") value = _.transform(value, iteratee)
		result[key] = value
		return result
	})
	const lastSlash = path.lastIndexOf("/")
	if (lastSlash !== -1) {
		const dirPath = path.substring(0, lastSlash)
		mkdirSync(dirPath, recursive)
	}
	writeFileSync(path, JSON.stringify(object, null, 2) + "\n")
}

/**
 * Format key to Minecraft format
 */
function formatKey(key: string): string {
	if (key.indexOf("MC") === -1) return key
	key = key.substring(2)
	return (
		"minecraft:" +
		key
			.replace("_", ".")
			.replace(/([a-z])([A-Z])/g, "$1_$2")
			.toLowerCase()
	)
}
