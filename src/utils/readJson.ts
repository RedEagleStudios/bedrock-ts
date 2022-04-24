import { readFileSync } from "fs"
import { parse } from "jsonc-parser"
import { formatJson } from "./formatJson"

/**
 * Reads json file from path and format it
 * @returns Object with formatted keys
 */
export function readJson<T>(path: string): T {
	const json = readFileSync(path).toString()
	return formatJson(parse(json)) as unknown as T
}
