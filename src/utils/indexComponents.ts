import FastGlob from "fast-glob"
import { appendFileSync, writeFileSync } from "fs"

// Do not run on watch mode
export function indexComponents(): void {
	const dir = "./src/bedrock/entity/components"

	const index = `${dir}/index.ts`
	const components = `${dir}/Components.ts`

	writeFileSync(index, "")
	writeFileSync(components, "export interface Components {\n [key: `minecraft:${string}`]: unknown\n")

	FastGlob.sync(`${dir}/*.ts`, {
		deep: 1,
		onlyFiles: true,
	}).forEach((path) => {
		if (path.match("index")) return
		path = path.split("/")[6].replace(".ts", "")
		appendFileSync(index, `export * from "./${path}"\n`)

		if (path.match("Components")) return
		appendFileSync(components, `${path.replace(/(.*)/, "$1?: $1")}\n`)
	})
	appendFileSync(components, `}\n`)
}
