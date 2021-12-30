import { PathOrFileDescriptor, writeFileSync } from "fs"

export function writeJson<T>(file: PathOrFileDescriptor, data: T): void {
	const json = JSON.stringify(data, null, 2)
	writeFileSync(file, formatJsonKey(json))
}

function formatJsonKey(str: string): string {
	const pairs: string[][] = []

	let res = str.replace(/"([^"]+)":/g, (key) => {
		const newKey = key
			.replace(/MC/, "minecraft:")
			.replace(/_/g, ".")
			.replace(/([a-z])([A-Z])/g, "$1_$2")
			.toLowerCase()

		if (!key.match(/MC/)) {
			pairs.push([key, newKey].map((v) => v.replace(/:/, "")))
		}
		return newKey
	})

	pairs.forEach((pair) => {
		const keyRegex = new RegExp(`${pair[0]}(?!:)`, "g")
		res = res.replace(keyRegex, pair[1])
	})

	return res
}
