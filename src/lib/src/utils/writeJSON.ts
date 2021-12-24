import { formatKey } from "./formatKey"
import fs from "fs"

export function writeJSON<T>(object: T, outPath = "./out/", fileName: string) {
	console.log(`Writing ${fileName} to ${outPath}`)
	const json = formatKey(JSON.stringify(object, null, 2))
	fs.writeFile(`./out/${outPath}${fileName}`, json, (err) => {
		if (err)
			throw err
	})
}
