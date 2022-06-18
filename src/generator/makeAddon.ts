import { watch } from "chokidar"
import { existsSync, readdirSync, rmSync } from "fs"
import { copySync } from "fs-extra"
import { performance } from "perf_hooks"
import { MCAddon } from "../bedrock/addon/MCAddon"
import { AddonGenerator } from "./AddonGenerator"
import { autolink } from "./autolink"

export function makeAddon(addon: MCAddon, enableAutolink?: boolean) {
	const assets = `res`
	const outDir = `out/${addon.packName}`
	const ignoreInitial = existsSync("out")
	const persistent = process.argv[2] !== "build"

	const startTime = performance.now()
	new AddonGenerator(addon).generate()
	console.log(`Build finished in ${(performance.now() - startTime).toPrecision(5)}ms`)

	if (!persistent) {
		const world = readdirSync(assets).find((v) => v.indexOf(".mcworld") !== -1)
		if (world) {
			copySync(`${assets}/${world}`, `out/${world}`)
		}
	}

	if (process.platform === "win32" && enableAutolink && !ignoreInitial) {
		autolink(addon.packName)
	}

	watch(assets, {
		ignoreInitial,
		persistent,
		ignored: ["**/*.mcworld"],
	}).on("all", (event, path) => {
		if (path.indexOf("BP") === -1 && path.indexOf("RP") === -1) return
		const outPath = `${outDir} ${path.substring(assets.length + 1)}`

		switch (event) {
			case "add":
			case "change":
				copySync(path, outPath)
				console.log(`Modified: ${path}`)
				break
			case "unlink":
				if (existsSync(outPath)) rmSync(outPath)
				console.log(`Deleted: ${path}`)
				break
		}
	})
}
