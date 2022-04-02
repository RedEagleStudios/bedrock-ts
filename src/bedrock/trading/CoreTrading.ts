import { Trading } from "./Trading"

export interface CoreTrading {
	dir?: string
	fileName: string
	create(): Trading
}
