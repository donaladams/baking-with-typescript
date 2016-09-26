

/**
 * Three.
 * 
 * Modules + namespacing
 * 
 */

export enum IngredientType {
    Flour,
    Liquid,
    RaisingAgent,
    Starter,
    Fat,
    Other
}

export interface Ingredient {
    name: string;
    type: IngredientType;
}

export interface WeighedIngredient {
    name: string;
    weight: number;
}

export interface BakersPercentage {
    name: string;
    percentage: number;
}

export interface Recipe {
    name: string;
    ingredients: Ingredient[];
    formula: BakersPercentage[];
}
