#!/usr/bin/env node

import { spawn } from "child_process"
import { existsSync, rmSync } from "fs-extra"
import yargs from "yargs"
import { recursive } from "./constants/fsOptions"

const parser = yargs(process.argv.slice(2)).options({
	path: {
		alias: "p",
		type: "string",
		default: "src/main.ts",
		desc: "TypeScript file to execute",
	},
	watch: {
		alias: "w",
		type: "boolean",
		default: false,
		desc: "Enable watch mode",
	},
})

const { watch, path } = parser.parseSync()

if (existsSync("out")) rmSync("out", recursive)

if (watch) {
	const basedir = path.split("/")[0]
	spawn("tsnd", ["--transpile-only", "--respawn", `--watch ${basedir}/**/*.ts`, path], {
		shell: true,
		stdio: "inherit",
	})
} else {
	spawn("ts-node", ["--transpile-only", path, "build"], {
		shell: true,
		stdio: "inherit",
	})
}
