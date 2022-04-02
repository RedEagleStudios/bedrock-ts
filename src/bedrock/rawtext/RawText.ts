// https://wiki.bedrock.dev/commands/tellraw.html
export interface RawText {
	rawtext: {
		score?: {
			name: string
			objective: string
		}
		selector?: string
		text?: string
		translate?: string
		with?: string
	}[]
}
