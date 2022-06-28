import { copySync, existsSync, rmSync, symlinkSync } from "fs-extra"
import { homedir } from "os"
import { join } from "path/win32"
import { recursive } from "../constants/fsOptions"

export function autolink(packName: string) {
  const nameBP = `${packName} BP`
  const nameRP = `${packName} RP`

  const minecraft = join(
    homedir(),
    "AppData/Local/Packages/Microsoft.MinecraftUWP_8wekyb3d8bbwe/LocalState/games/com.mojang"
  )

  const destBP = join(minecraft, `development_behavior_packs/${nameBP}`)
  const destRP = join(minecraft, `development_resource_packs/${nameRP}`)

  const sourceBP = `out/${nameBP}`
  const sourceRP = `out/${nameRP}`

  const paths = [
    [sourceBP, destBP],
    [sourceRP, destRP],
  ]
  paths.forEach(([source, dest]) => {
    if (existsSync(dest)) rmSync(dest, recursive)
    copySync(source, dest)
    rmSync(source, recursive)
    symlinkSync(dest, source, "junction")
  })
}
