import { PathOrFileDescriptor, writeFileSync } from "fs"

export function writeJson<T>(file: PathOrFileDescriptor, data: T): void {
	if (!data) return
	const json = JSON.stringify(data, null, 2)
	writeFileSync(file, formatJsonKey(json))
}

function formatJsonKey(str: string): string {
	return str.replace(/"([^"]+)":/g, (key) => {
		if (!key.match(/MC/)) {
			return key
		}
		return key
			.replace(/MC/, "minecraft:")
			.replace(/_/g, ".")
			.replace(/([a-z])([A-Z])/g, "$1_$2")
			.toLowerCase()
	})
}
