/**
 * Four
 * 
 * External libraries - lodash
 * Declaration files - DefinitelyTyped
 * 
 */


import {IngredientType, Ingredient, WeighedIngredient, BakersPercentage, Recipe} from './recipe'
import * as _ from 'lodash'

namespace Four {
    let recipe: Recipe = {
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
        const toWeight = (percent: number, total: number): number => percent * total / 100
        return _.map(
            recipe.formula, 
            (bp:BakersPercentage) => ({
                name: bp.name, 
                weight: toWeight(bp.percentage, totalFlourWeight) 
            })
        )
    }

    export const run: () => void = () => {
        let weights: WeighedIngredient[] = calculateIngredientWeights(recipe, 500)
        console.log(weights)
    }
}

Four.run()