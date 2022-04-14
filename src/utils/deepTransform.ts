import transform from "lodash.transform"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function deepTransform(object: Record<string, any>, callback: (key: string) => string) {
	object = transform(object, function iteratee(result, value, key) {
		if (typeof key === "string") key = callback(key)
		if (typeof value === "object") value = transform(value, iteratee)
		result[key] = value
		return result
	})
	return object
}
