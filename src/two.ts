
/**
 * One.
 * 
 * Create some datatypes
 * 
 */


enum IngredientType {
    Flour,
    Liquid,
    RaisingAgent,
    Starter,
    Other
}

interface Ingredient {
    name: string;
    type: IngredientType;
}

interface BreadRecipe {
    name: string;
    ingredients: Ingredient[];
}

