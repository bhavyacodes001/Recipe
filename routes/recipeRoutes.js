const express = require('express');
const router = express.Router();
const {
    createRecipe,
    getAllRecipes,
    getRecipeById,
    updateRecipe,
    deleteRecipe
} = require('../controllers/recipeController');

// Create a new recipe
router.post('/', createRecipe);

// Get all recipes
router.get('/', getAllRecipes);

// Get recipe by ID
router.get('/:id', getRecipeById);

// Update recipe
router.put('/:id', updateRecipe);

// Delete recipe
router.delete('/:id', deleteRecipe);

module.exports = router; 