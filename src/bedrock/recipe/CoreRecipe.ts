import { Identifier } from "../shared/Identifier"
import { Recipe } from "./Recipe"

export interface CoreRecipe {
	identifier: Identifier
	createRecipe(): Recipe
}
