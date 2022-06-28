import { Filters } from "../filters/Filter"

export interface MCOnTargetAcquired {
  event?: string
  filters?: Filters
  target?: string
}
