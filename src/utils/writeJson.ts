import { PathOrFileDescriptor, writeFileSync } from "fs"
import _ from "lodash"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function writeJson(file: PathOrFileDescriptor, data: any): void {
	if (!data) return
	data = _.transform(data, function iteratee(result, value, objKey) {
		if (typeof objKey === "string") objKey = formatKey(objKey)
		if (typeof value === "object") value = _.transform(value, iteratee)
		result[objKey] = value
		return result
	})
	writeFileSync(file, JSON.stringify(data, null, 2))
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
