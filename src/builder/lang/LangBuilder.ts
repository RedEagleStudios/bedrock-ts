import { CoreBlock } from "../../bedrock/block/CoreBlock"
import { CoreEntity } from "../../bedrock/entity/CoreEntity"
import { CoreItem } from "../../bedrock/item/CoreItem"

export class LangBuilder {
  private lang: string[] = []

  constructor(packName?: string, type?: "Behavior" | "Resource") {
    if (packName) this.lang.push(`pack.name=${packName}`)
    if (type) this.lang.push(`pack.description=${type} Pack for ${packName}`)
  }

  public addBlock(block: CoreBlock) {
    const identifier = block.identifier
    const name = block.name ?? identifier.toName()

    this.lang.push(`tile.${identifier}.name=${name}`)
  }

  public addEntity(entity: CoreEntity) {
    const identifier = entity.identifier
    const name = entity.name ?? identifier.toName()
    const spawn_egg =
      entity.spawn_egg ?? (entity.spawn_egg_prefix === false ? name : `${entity.spawn_egg_prefix ?? "Spawn"} ${name}`)

    this.lang.push(`entity.${entity.identifier}.name=${name}`)
    this.lang.push(`item.spawn_egg.entity.${identifier}.name=${spawn_egg}`)

    if (entity.rideable) {
      if (typeof entity.rideable === "boolean") entity.rideable = "Tap jump to exit"
      this.lang.push(`action.hint.exit.${identifier}=${entity.rideable}`)
    }
  }

  public addItem(item: CoreItem) {
    const identifier = item.identifier
    const name = item.name ?? identifier.toName()

    this.lang.push(`item.${identifier}.name=${name}`)
  }

  public build() {
    return this.lang.join("\n")
  }
}
