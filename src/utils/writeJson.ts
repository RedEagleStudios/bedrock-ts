import transform from "lodash.transform"
import { writeFile } from "./writeFile"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function writeJson(path: string, object: Record<string, any>): void {
	object = transform(object, function iteratee(result, value, key) {
		if (typeof key === "string") key = formatKey(key)
		if (typeof value === "object") value = transform(value, iteratee)
		result[key] = value
		return result
	})
	writeFile(path, JSON.stringify(object, null, 2) + "\n")
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
