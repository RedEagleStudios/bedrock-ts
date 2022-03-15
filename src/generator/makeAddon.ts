import { watch } from "chokidar"
import { existsSync, rmSync } from "fs"
import { copySync } from "fs-extra"
import { MCAddon } from "../bedrock/addon/MCAddon"
import { AddonGenerator } from "./AddonGenerator"

export function makeAddon(addon: MCAddon) {
	const name = addon.packName
	const assets = `src/assets`
	const outDir = `out/${name}`
	const ignore = existsSync("out")

	new AddonGenerator(addon).generate()

	watch(assets, {
		ignoreInitial: ignore,
	})
		.on("all", (event, path) => {
			console.log(path)
			if (event === "add" || event === "change") {
				const outPath = `${outDir} ${path.substring(assets.length + 1)}`
				copySync(path, outPath)
			}
		})
		.on("unlink", (path) => {
			const outPath = `${outDir} ${path.substring(assets.length + 1)}`
			if (existsSync(outPath)) {
				rmSync(outPath)
			}
		})
}
