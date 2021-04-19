/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';

import { RECIPES } from 'src/mocks';
import { RecipeArray, RecipeFilterType } from 'src/models/Recipe';
import createContext from 'src/utils/create-context';
import { useFilterContext } from './FilterContext';

type RecipeContext = {
  recipes: RecipeArray;
  filteredRecipes: RecipeArray;
  loading: boolean;
  clear: () => void;
  append: (newRecipes: RecipeArray) => void;
  prepend: (newRecipes: RecipeArray) => void;
  clearFilter: () => void;
};

export const [
  useRecipesContext,
  RecipeContextProvider,
] = createContext<RecipeContext>();

const filterRecipe = (recipes: RecipeArray, filter: RecipeFilterType) => {
  return recipes
    .map((recipe) => {
      if (filter.ingredient) {
        const lowerFilterIngredient = filter.ingredient?.toLowerCase();
        if (
          !recipe.ingredients.some((ingredient) =>
            ingredient.toLowerCase().includes(lowerFilterIngredient)
          )
        )
          return undefined;
      }

      if (filter.tag) {
        const lowerTag = filter.tag.toLowerCase();
        if (!recipe.tags.some((tag) => tag.toLowerCase().includes(lowerTag)))
          return undefined;
      }

      if (filter.title) {
        const lowerTitle = filter.title.toLowerCase();
        if (!recipe.title.includes(lowerTitle)) return undefined;
      }
      return recipe;
    })
    .filter(Boolean) as RecipeArray;
};

export const RecipeProvider: React.FC = ({ children }) => {
  const [recipes, setRecipes] = useState<RecipeArray>([]);
  const [loading] = useState(true);
  const { recipeFilter, clearRecipeFilter } = useFilterContext();

  // initialize with mock data
  useEffect(() => {
    setRecipes(RECIPES);
  }, []);

  const clear = () => setRecipes([]);

  const append = (newRecipes: RecipeArray) =>
    setRecipes(recipes.concat(newRecipes));

  const prepend = (newRecipes: RecipeArray) =>
    setRecipes(newRecipes.concat(recipes));

  const recipesContext = {
    recipes,
    filteredRecipes: filterRecipe(recipes, recipeFilter),
    loading,
    clear,
    append,
    prepend,
    clearFilter: clearRecipeFilter,
  };

  return (
    <RecipeContextProvider value={recipesContext}>
      {children}
    </RecipeContextProvider>
  );
};
