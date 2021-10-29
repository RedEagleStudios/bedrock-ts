import { exec } from "child_process"
import fs from "fs"
import path from "path"

function _getCallerFile(): string {
	const originalFunc = Error.prepareStackTrace

	let callerfile
	try {
		const err = new Error()
		let currentfile

		Error.prepareStackTrace = function (err, stack) { 
			return stack 
		}

		if (err.stack) {
			const stack = Error.prepareStackTrace(err, err.stack as unknown as NodeJS.CallSite[])
			currentfile = stack.shift().getFileName()

			while (err.stack.length) {
				callerfile = stack.shift().getFileName()
				if (currentfile !== callerfile) 
					break
			}
		}
	} catch (e) {}

	Error.prepareStackTrace = originalFunc 

	return callerfile
}

export function makeJSON<T>(object: T, outPath = "./out/", fileName = path.basename(_getCallerFile()).replace(".ts", ".json")) {
	fs.writeFile(outPath+fileName, JSON.stringify(object), (err) => {
		if (err)
			throw err
		exec(`npx prettier ${outPath + fileName} --write --config ./.prettierrc`)
	})
}
