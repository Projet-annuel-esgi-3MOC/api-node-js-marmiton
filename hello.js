// Import required modules
const express = require('express');
const pkg = require('marmiton-api');
const bodyparser = require ('body-parser')

// Destructure needed objects from marmiton-api package
const { searchRecipes, MarmitonQueryBuilder, RECIPE_PRICE, RECIPE_DIFFICULTY } = pkg;

// Create a new instance of the query builder
const qb = new MarmitonQueryBuilder();

// Set up the Express app
const app = express();
const port = 3000; // You can change the port number as needed


app.get('/',(req, res)=>{
    res.send('Bienvenue sur  l\' API COOKUP ');
})
// Define a route for the API
app.get('/recipes', async (req, res) => {
  try {
    // Build the recipe search query
    const query = qb
      .withTitleContaining('soja')
      .withoutOven()
      .withPrice(RECIPE_PRICE.CHEAP)
      .takingLessThan(45)
      .withDifficulty(RECIPE_DIFFICULTY.EASY)
      .build();

    // Fetch the recipes using the searchRecipes function
    const recipes = await searchRecipes(query);

    // Send the recipe data as a JSON response
    res.json(recipes);
  } catch (err) {
    // Handle any errors that occur
    console.error(err);
    res.status(500).json({ message: 'An error occurred' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});