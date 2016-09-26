
/**
 * Two.
 * 
 * Type Annotations
 * Interfaces
 * Structural Typing
 * Enums
 * Namespaces
 * 
 */

namespace Two {

    enum IngredientType {
        Flour,
        Liquid,
        RaisingAgent,
        Starter,
        Fat,
        Other
    }

    interface Ingredient {
        name: string;
        type: IngredientType;
    }

    interface WeighedIngredient {
        name: string;
        weight: number;
    }

    interface BakersPercentage {
        name: string;
        percentage: number;
    }

    interface Recipe {
        name: string;
        ingredients: Ingredient[];
        formula: BakersPercentage[];
    }

    var recipe: Recipe = {
        name: "Nutella Scones",
        ingredients: [
            { name: "Flour", type: IngredientType.Flour },
            { name: "Buttermilk", type: IngredientType.Liquid },
            { name: "Salt", type: IngredientType.Other },
            { name: "Sugar", type: IngredientType.Other },
            { name: "Nutella", type: IngredientType.Other },
            { name: "Baking Soda", type: IngredientType.RaisingAgent },
            { name: "Butter", type: IngredientType.Fat }
        ],
        formula: [
            { name: "Flour", percentage: 100 },
            { name: "Buttermilk", percentage: 50 },
            { name: "Salt", percentage: 1 },
            { name: "Sugar", percentage: 1 },
            { name: "Nutella", percentage: 15 },
            { name: "Baking Soda", percentage: 0.5 },
            { name: "Butter", percentage: 10 }
        ]
    }

    function calculateIngredientWeights(recipe: Recipe, totalFlourWeight: number): WeighedIngredient[] {
        var l: number = recipe.formula.length
        var weights: WeighedIngredient[] = []
        for (var i=0; i<l; i++) {
            weights.push({
                name: recipe.ingredients[i].name,
                weight: recipe.ingredients[i].percentage * totalFlourWeight / 100
            })
        }
        return weights;
    }

    export function run(): void {
        var totalFlourWeight: number = 500
        var weights: WeighedIngredient[] = calculateIngredientWeights(totalFlourWeight, recipe)
        console.log(weights)
    }
}

Two.run()