import fs, { mkdir } from "fs"
import { exec } from "child_process"

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
		mkdir('out/BP/entities', { recursive: true }, (err) => {
			if (err) {
				console.log(err)
			}
		})
		this.bedrockPaths.forEach(path => {
			fs.readdir(`./src/core/${path}`, (err, files) => {
				files.forEach(file => {
					if (file.endsWith('.ts')) {
						exec(`ts-node ./src/core/${path}${file}`, (err) => {
							if (err) {
								console.log(err)
								return
							}
						})
					}
				})
			})
		})
	}
}
