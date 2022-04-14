import upperFirst from "lodash.upperfirst"
import { deepTransform } from "./deepTransform"

/**
 * Converts raw Minecraft JSON keys into bedrock-ts format
 * @param object Raw Minecraft JSON
 * @returns Object with formatted keys
 */
export function formatJson(object: object) {
	return deepTransform(object, (key) => {
		if (key.indexOf("minecraft:") === -1) return key
		key = key.split(":")[1]
		key = upperFirst(key)
		return (
			"MC" +
			key
				.replace(/([a-z])_([a-z])/g, (str) => str[0] + str[2].toUpperCase())
				.replace(/\.([a-z])/, (str) => "_" + str[1].toUpperCase())
		)
	})
}
