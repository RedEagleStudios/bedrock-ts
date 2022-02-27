import { appendFileSync, readdirSync, writeFileSync } from "fs"

/**
 * Generate Components.ts and index.ts file
 * @internal
 */
export function generateComponents(): void {
	const dir = "./src/bedrock/entity/components/"

	const index = `${dir}/index.ts`
	const components = `${dir}/Components.ts`

	writeFileSync(index, "")
	writeFileSync(components, "export interface Components {\n [key: ComponentKey]: unknown\n")

	readdirSync(dir).forEach((v) => {
		let path = `${dir}/${v}`
		if (path.match("index")) return
		path = path.split("/")[6].replace(".ts", "")
		appendFileSync(index, `export * from "./${path}"\n`)

		if (path.match("Components")) return
		appendFileSync(components, `${path.replace(/(.*)/, "$1?: $1")}\n`)
	})
	appendFileSync(components, `}\n`)
}
