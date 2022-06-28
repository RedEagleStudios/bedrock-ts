import { RawText } from "../rawtext/RawText"

export type Command = `/${string}`

export interface DialogueSceneButton {
  name?: string | RawText
  commands?: Command[]
}

export interface DialogueScene {
  scene_tag: string
  npc_name?: string
  text?: string | RawText
  buttons?: DialogueSceneButton[]
  on_open_commands?: Command[]
  on_close_commands?: Command[]
}

export interface Dialogue {
  format_version: "1.14.0"
  MCNpcDialogue: {
    scenes: DialogueScene[]
  }
}
