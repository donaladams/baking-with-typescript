/**
 * One
 * 
 * Some plain old Javascript
 */


var recipe = {
    name: "Nutella Scones",
    ingredients: [
        { name: "Flour", type: "Flour"},
        { name: "Buttermilk", type: "Liquid"},
        { name: "Salt", type: "Other"},
        { name: "Sugar", type: "Other"},
        { name: "Nutella", type: "Other"},
        { name: "Baking Soda", type: "RaisingAgent"},
        { name: "Butter", type: "Fat"},
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

function calculateIngredientWeights(recipe, totalFlourWeight) {
    var l = recipe.formula.length
    var weights = []
    for (var i=0; i<l; i++) {
        weights.push({
            ingredient: recipe.ingredients[i].ingredient,
            weight: recipe.ingredients[i].percentage * totalFlourWeight / 100
        })
    }
    return weights;
}

var totalFlourWeight = 600
var weights = calculateIngredientWeights(totalFlourWeight, recipe)
console.log(weights)