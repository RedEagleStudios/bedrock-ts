import { makeJSON } from "../src/core"
import { EntityBehavior } from "../src/types/BPEntity"

const dummy: EntityBehavior = {
	"format_version": "1.16.0",
	"minecraft:entity": {
		"description": {
			"identifier": "blaa",
		},
		"component_groups": {
			"bla": {
				"minecraft:health": {
					"max": 1,
					"value": 1,
				},
			},
		},
		"components": {
			"minecraft:health": {},
		},
		"events": {
			"minecraft:entity_spawned": {
				"add": {
					"component_groups": [],
				},
			},
			"bla": {
				"add": {
					"component_groups": [""],
				},
				"remove": {
					"component_groups": [],
				},
			},
		},
	},
}

makeJSON(dummy, "./out/BP/")
