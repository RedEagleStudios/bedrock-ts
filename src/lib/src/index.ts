import { exec } from "child_process"
import fs from "fs"

export class BedrockTS {
	private static bedrockPaths: Array<string> = new Array<string>()

	public static addPaths(...paths: string[]) {
		paths.forEach(path => {
			if (this.bedrockPaths && !this.bedrockPaths.includes(path)) {
				this.bedrockPaths.push(path)
			}
		})
	}

	public static ignite() { 
		this.bedrockPaths.forEach(path => {
			fs.readdir(`./dist/core/${path}`, (err, files) => {
				files.forEach(file => {
					if (file.endsWith('.js')) {
						exec(`node ./dist/core/${path}${file}`, (err, stdout) => {
							if (err) {
								console.log(err)
								return
							}
							console.log(`${stdout}`)
						})
					}
				})
			})
		})
	}
}
