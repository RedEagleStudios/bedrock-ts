import { Trading } from "./Trading"

export interface CoreTrading {
	fileName: string
	create(): Trading
}
