import pkg from 'marmiton-api';
const { searchRecipes, MarmitonQueryBuilder, RECIPE_PRICE, RECIPE_DIFFICULTY, Recipe } = pkg;
const qb = new MarmitonQueryBuilder();
// A query builder is provided to make complex queries
const query = qb
    .withTitleContaining('soja')
    .withoutOven()
    .withPrice(RECIPE_PRICE.CHEAP)
    .takingLessThan(45)
    .withDifficulty(RECIPE_DIFFICULTY.EASY)
    .build()

// Fetch the recipes
// @ts-ignore
const recipes = await searchRecipes(query)
console.log("toto")
console.log(recipes)