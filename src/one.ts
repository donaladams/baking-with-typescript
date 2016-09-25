

var recipe = {
    name: "Nutella Scones",
    ingredients: [
        "Flour",
        "Buttermilk",
        "Salt",
        "Sugar",
        "Nutella",
        "Baking Soda"
    ],
    formula: [
        {ingredient: "Flour", percentage: 100},
        {ingredient: "Buttermilk", percentage: 50},
        {ingredient: "Salt", percentage: 1},
        {ingredient: "Sugar", percentage: 1},
        {ingredient: "Nutella", percentage: 15},
        {ingredient: "Baking Soda", percentage: 0.5}
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


var weights = calculateIngredientWeights(recipe, 500)
console.log(weights)