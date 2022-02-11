import _ from "lodash"
import path from "path/posix"
import { Identifier } from "../bedrock/shared/Identifier"

declare global {
	interface String {
		removeNamespace(this: Identifier): string
		toFilePath(this: Identifier, dir?: string): string
		toName(this: Identifier): string
	}
}

String.prototype.removeNamespace = function (this: Identifier): string {
	const res = this.split(":")
	if (res.length === 1) {
		return this
	}
	return res[1]
}

String.prototype.toFilePath = function (this: Identifier, dir?: string): string {
	return path.join(dir ?? "", this.removeNamespace().replace(/\./g, "/"))
}

String.prototype.toName = function (this: Identifier): string {
	const s = this.removeNamespace()
	return _.startCase(s.substring(s.lastIndexOf(".") + 1))
}

export {}
