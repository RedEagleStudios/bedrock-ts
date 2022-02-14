import _ from "lodash"

/**
 * Converts raw Minecraft JSON keys into bedrock-ts format
 * @param object Raw Minecraft JSON
 * @returns Object with formatted keys
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function formatJson(object: Record<string, any>): unknown {
	object = _.transform(object, function iteratee(result, value, key) {
		if (typeof key === "string") key = formatKey(key)
		if (typeof value === "object") value = _.transform(value, iteratee)
		result[key] = value
		return result
	})
	return object
}

/**
 * Format key to bedrock-ts format
 */
function formatKey(key: string): string {
	if (key.indexOf("minecraft:") === -1) return key
	key = key.split(":")[1]
	key = _.upperFirst(key)
	return (
		"MC" +
		key
			.replace(/([a-z])_([a-z])/g, (str) => str[0] + str[2].toUpperCase())
			.replace(/\.([a-z])/, (str) => "_" + str[1].toUpperCase())
	)
}
