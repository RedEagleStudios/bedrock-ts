import { Identifier } from "../../bedrock/entity/Identifier"

declare global {
	export interface String {
		formatKey(this: string): string
		removeNamespace(this: Identifier): string
	}
}

String.prototype.formatKey = function (this: string): string {
	return this.replace(/"([^"]+)":/g, (key) => {
		return key
			.replace(/MC/, "minecraft:")
			.replace(/(?<=.)(?=[A-Z])/g, "_")
			.replace(/:_/, ":")
	}).toLocaleLowerCase()
}

String.prototype.removeNamespace = function (this: string): string {
	const res = this.split(":")
	if (res.length === 1) {
		return this
	}
	return res[1]
}

export {}
