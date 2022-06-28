export interface RenderController {
  format_version: "1.8.0"
  render_controllers: Record<string, RenderControllerItem>
}

interface Color {
  r: number
  g: number
  b: number
  a: number
}

export interface RenderControllerItem {
  arrays?: {
    geometries?: Record<string, string[]>
    materials?: Record<string, string[]>
    textures?: Record<string, string[]>
  }
  geometry: string
  materials: Record<string, string>[]
  textures: string[]
  filter_lighting?: boolean
  ignore_lighting?: boolean
  color?: Color
  is_hurt_color?: Color
  light_color_multiplier?: number
  on_fire_color?: Color
  overlay_color?: Color
  part_visibility?: Record<string, boolean | string>[]
  uv_anim?: {
    offset?: [number, number]
    scale?: [number, number]
  }
}
