import { watch } from "chokidar"
import { existsSync, readdirSync, rmSync } from "fs"
import { copySync } from "fs-extra"
import { performance } from "perf_hooks"
import { MCAddon } from "../bedrock/addon/MCAddon"
import { AddonGenerator } from "./AddonGenerator"
import { autolink } from "./autolink"

export function makeAddon(addon: MCAddon, enableAutolink?: boolean) {
	const assets = `src/assets`
	const outDir = `out/${addon.packName}`
	const ignoreInitial = existsSync("out")

	const startTime = performance.now()
	new AddonGenerator(addon).generate()
	console.log(`Build finished in ${(performance.now() - startTime).toPrecision(5)}ms`)

	// If running on github actions
	if (process.platform !== "win32") {
		const world = readdirSync(assets).find((v) => v.indexOf(".mcworld") !== -1)
		if (world) {
			copySync(`${assets}/${world}`, `out/${world}`)
		}
		return
	}

	if (enableAutolink && !ignoreInitial) {
		autolink(addon.packName)
	}

	watch(assets, {
		ignoreInitial,
		ignored: ["**/*.mcworld"],
	}).on("all", (event, path) => {
		if (path.indexOf("BP") === -1 && path.indexOf("RP") === -1) return
		const outPath = `${outDir} ${path.substring(assets.length + 1)}`

		switch (event) {
			case "add":
			case "change":
				copySync(path, outPath)
				break
			case "unlink":
				if (existsSync(outPath)) rmSync(outPath)
				break
		}
	})
}
