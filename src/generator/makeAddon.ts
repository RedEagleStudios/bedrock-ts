import { watch } from "chokidar"
import { existsSync, rmSync } from "fs"
import { copySync } from "fs-extra"
import { performance } from "perf_hooks"
import { MCAddon } from "../bedrock/addon/MCAddon"
import { AddonGenerator } from "./AddonGenerator"

export function makeAddon(addon: MCAddon) {
	const name = addon.packName
	const assets = `src/assets`
	const outDir = `out/${name}`
	const ignoreInitial = existsSync("out")

	const startTime = performance.now()
	new AddonGenerator(addon).generate()
	console.log(`Build finished in ${(performance.now() - startTime).toPrecision(5)}ms`)

	watch(assets, {
		ignoreInitial,
	}).on("all", (event, path) => {
		const outPath = `${outDir} ${path.substring(assets.length + 1)}`

		if (event === "add" || event === "change") {
			copySync(path, outPath)
		}

		if (event === "unlink") {
			if (existsSync(outPath)) {
				rmSync(outPath)
			}
		}
	})
}
