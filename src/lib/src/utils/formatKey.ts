export function formatKey(jsonString: string) {
	return jsonString.replace(/"([^"]+)":/g, (key) => {
		return key.replace(/MC/, "minecraft:").replace(/(?<=.)(?=[A-Z])/, "_").replace(/:_/, ":").toLowerCase()
	})
}
