import { Identifier } from "../shared/Identifier"
import { RPBlock } from "./RPBlock"

type FormatVersion = [1, 1, 0]

export interface Blocks {
	format_version: FormatVersion
	[key: Identifier]: RPBlock
}
