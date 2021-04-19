import { Maybe } from './Maybe';

export interface Recipe {
  id: number;
  title: string;
  description: string;
  ingredients: Array<string>;
  directions: Array<string>;
  servings: number;
  tags: Array<string>;
  author: Author;
  source_url: string;
  prep_time_min?: Maybe<number>;
  cook_time_min?: Maybe<number>;
}

export type RecipeArray = Array<Recipe>;

export interface Author {
  name: string;
  url: string;
}

export type RecipeFilterType = {
  ingredient: Maybe<string>;
  title: Maybe<string>;
  tag: Maybe<string>;
};

export const DEFAULT_RECIPE_FILTER: RecipeFilterType = {
  ingredient: '',
  title: '',
  tag: '',
};
