import _ from "lodash"

/**
 * Converts raw Minecraft JSON keys into bedrock-ts format
 * @param object Raw Minecraft JSON
 * @returns Object with formatted keys
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function parseRawJson(object: any): unknown {
	object = _.transform(object, function iteratee(result, value, objKey) {
		if (typeof objKey === "string") objKey = formatKey(objKey)
		if (typeof value === "object") value = _.transform(value, iteratee)
		result[objKey] = value
		return result
	})
	return object
}

function formatKey(key: string): string {
	if (key.indexOf("minecraft:") === -1) return key
	key = key.split(":")[1]
	const name = _.upperFirst(key)
	return (
		"MC" +
		name
			.replace(/([a-z])_([a-z])/g, (str) => str[0] + str[2].toUpperCase())
			.replace(/\.([a-z])/, (str) => "_" + str[1].toUpperCase())
	)
}
