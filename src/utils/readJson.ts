import { readFileSync } from "fs"
import { parse } from "jsonc-parser"
import { formatJson } from ".."

/**
 * Reads json file from path and format it
 * @returns Object with formatted keys
 */
export function readJson(path: string): unknown {
	const json = readFileSync(path).toString()
	return formatJson(parse(json))
}
