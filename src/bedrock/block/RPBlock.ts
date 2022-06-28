export interface TextureFaces {
  down?: string
  east?: string
  north?: string
  side?: string
  south?: string
  up?: string
  west?: string
}

export interface RPBlock {
  sound?: string
  textures: string | TextureFaces
}
