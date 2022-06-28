import path from "path/posix"

export function join(...paths: (string | undefined)[]) {
  return path.join(...paths.map((s) => s ?? ""))
}
