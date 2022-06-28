import { TextureData } from "./TextureData"

export interface TerrainTexture {
  resource_pack_name: "vanilla"
  padding?: number
  num_mip_levels?: number
  texture_data: TextureData
  texture_name: "atlas.terrain"
}
