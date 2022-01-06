export function parseJson<T>(data: T): unknown {
	if (!data) return undefined
	const json = JSON.stringify(data, null, 2)
	const res = JSON.parse(formatJsonKey(json))
	return res
}

function formatJsonKey(str: string): string {
	return str.replace(/"([^"]+)":/g, (key) => {
		if (!key.match("minecraft:")) {
			return key
		}
		return key.replace(/(minecraft\:)(.[^"]*)/, (match) => {
			match = match.split(":")[1]
			const name = match[0].toUpperCase() + match.slice(1)
			return (
				"MC" +
				name
					.replace(/\./g, "#")
					.replace(/([a-z])_([a-z])/g, (str) => {
						return str[0] + str[2].toUpperCase()
					})
					.replace(/\#/g, "_")
			)
		})
	})
}
