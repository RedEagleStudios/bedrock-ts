import { RPBlock, TextureFaces } from "../../bedrock/block/RPBlock"
import { Identifier } from "../../bedrock/shared/Identifier"
import { Builder } from "../Builder"

export class RPBlockBuilder extends Builder<RPBlock> {
  constructor(identifier: Identifier) {
    super({
      textures: identifier.removeNamespace(),
    })
  }

  public setTextures(textures: string | TextureFaces) {
    this.object.textures = textures
  }
  public setSound(sound: string) {
    this.object.sound = sound
  }
}
