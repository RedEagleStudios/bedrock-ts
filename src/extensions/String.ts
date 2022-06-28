import startCase from "lodash.startcase"
import { Identifier } from "../bedrock/shared/Identifier"
import { join } from "../utils/join"

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
  return join(dir, this.removeNamespace())
}

String.prototype.toName = function (this: Identifier): string {
  const s = this.removeNamespace()
  return startCase(s.substring(s.lastIndexOf(".") + 1))
}

export {}
