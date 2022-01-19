import { mkdirSync, writeFileSync } from "fs"
import _ from "lodash"
import { recursive } from "../constants/fsOptions"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function writeJson(filePath: string, data: any): void {
	if (!data) return
	data = _.transform(data, function iteratee(result, value, objKey) {
		if (typeof objKey === "string") objKey = formatKey(objKey)
		if (typeof value === "object") value = _.transform(value, iteratee)
		result[objKey] = value
		return result
	})
	const slashIndex = filePath.lastIndexOf("/")
	if (slashIndex !== -1) {
		const dirPath = filePath.substring(0, slashIndex)
		mkdirSync(dirPath, recursive)
	}
	writeFileSync(filePath, JSON.stringify(data, null, 2))
}

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
