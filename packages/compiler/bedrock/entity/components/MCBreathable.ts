export interface MCBreathable {
	breathableBlockList?: string[]
	breathAir?: boolean
	breathLava?: boolean
	breathSolid?: boolean
	breathWater?: boolean
	generatesBubbles?: boolean
	inhaleTime?: number
	notBreathableBlockList?: string[]
	suffocateTime?: number
	totalSupply?: number
}
