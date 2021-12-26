import { PathOrFileDescriptor, writeFileSync } from "fs"

export function writeJson<T>(file: PathOrFileDescriptor, data: T) {
	const json = JSON.stringify(data, null, 2)
	writeFileSync(file, formatKey(json))
}

function formatKey(str: string): string {
	return str
		.replace(/"([^"]+)":/g, (key) => {
			return key
				.replace(/MC/, "minecraft:")
				.replace(/(?<=.)(?=[A-Z])/g, "_")
				.replace(/:_/, ":")
		})
		.toLowerCase()
}
