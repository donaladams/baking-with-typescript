/**
 * Three
 * 
 * Modules
 * ES6 target
 */


import {IngredientType, Ingredient, WeighedIngredient, BakersPercentage, Recipe} from './recipe'

namespace Three {
    let recipe: Recipe = {
        name: "Nutella Scones",
        ingredients: [
            { name: "Flour", type: IngredientType.Flour},
            { name: "Buttermilk", type: IngredientType.Liquid},
            { name: "Salt", type: IngredientType.Other},
            { name: "Sugar", type: IngredientType.Other},
            { name: "Nutella", type: IngredientType.Other},
            { name: "Baking Soda", type: IngredientType.RaisingAgent},
        ],
        formula: [
            {name: "Flour", percentage: 100},
            {name: "Buttermilk", percentage: 50},
            {name: "Salt", percentage: 1},
            {name: "Sugar", percentage: 1},
            {name: "Nutella", percentage: 15},
            {name: "Baking Soda", percentage: 0.5}
        ]
    }

    function calculateIngredientWeights(recipe: Recipe, totalFlourWeight: number): WeighedIngredient[] {
        let l: number = recipe.formula.length
        let weights: WeighedIngredient[] = []
        for (var i=0; i<l; i++) {
            weights.push({
                name: recipe.formula[i].name,
                weight: recipe.formula[i].percentage * totalFlourWeight / 100
            })
        }
        return weights;
    }

    export const run: () => void = () => {
        let weights: WeighedIngredient[] = calculateIngredientWeights(recipe, 500)
        console.log(weights)
    }
}

Three.run()