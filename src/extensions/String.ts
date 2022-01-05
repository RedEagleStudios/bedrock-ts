import { Identifier } from "../bedrock/keys/Identifier"

declare global {
	interface String {
		removeNamespace(this: Identifier): string
	}
}

String.prototype.removeNamespace = function (this: string): string {
	const res = this.split(":")
	if (res.length === 1) {
		return this
	}
	return res[1]
}

export {}
