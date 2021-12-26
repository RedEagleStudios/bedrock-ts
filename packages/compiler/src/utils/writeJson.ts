import "../extensions/string"
import fs from "fs"

export function writeJson<T>(object: T, outPath = "./out/", fileName: string) {
	console.log(`Writing ${fileName} to ${outPath}`)
	const json = JSON.stringify(object, null, 2)
	fs.writeFile(`./out/${outPath}${fileName}`, json, (err) => {
		if (err) throw err
	})
}
