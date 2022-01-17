import { Identifier } from "../keys/Identifier"
import { Recipe } from "./Recipe"

export interface CoreRecipe {
	identifier: Identifier
	createRecipe(): Recipe
}
