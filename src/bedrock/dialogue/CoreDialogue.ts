import { Dialogue } from "./Dialogue"

export interface CoreDialogue {
  dir?: string
  fileName: string
  create(): Dialogue
}
