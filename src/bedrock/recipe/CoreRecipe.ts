import { Identifier } from "../shared/Identifier"
import { Recipe } from "./Recipe"

export interface CoreRecipe {
	dir?: string
	identifier: Identifier
	create(): Recipe
}
