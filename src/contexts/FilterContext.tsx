import React, { ReactElement, useState } from 'react';

import createContext from 'src/utils/create-context';
import { DEFAULT_RECIPE_FILTER, RecipeFilterType } from 'src/models';

type FilterContext = {
  recipeFilter: RecipeFilterType;
  setRecipeFilter: (filterOptions: RecipeFilterType) => void;
  clearRecipeFilter: () => void;
};

export const [
  useFilterContext,
  FilterContextProvider,
] = createContext<FilterContext>();

// eslint-disable-next-line react/prop-types
export const FilterProvider: React.FC = ({ children }): ReactElement => {
  const [recipeFilter, setFilterRecipe] = useState<RecipeFilterType>(
    DEFAULT_RECIPE_FILTER
  );

  const setRecipeFilter = (filterOptions: RecipeFilterType): void => {
    setFilterRecipe(filterOptions);
  };

  const clearRecipeFilter = () => {
    setFilterRecipe(DEFAULT_RECIPE_FILTER);
  };

  const filterContext = {
    recipeFilter,
    setRecipeFilter,
    clearRecipeFilter,
  };

  return (
    <FilterContextProvider value={filterContext}>
      {children}
    </FilterContextProvider>
  );
};
