import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import { RecipeProvider } from 'src/contexts';
import { FilterProvider } from 'src/contexts/FilterContext';

import { RecipeDetailView, RecipeListView } from 'src/views';
import theme from 'src/theme';

const Routes: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <FilterProvider>
        <RecipeProvider>
          <Router>
            <Switch>
              <Route path="/recipe-list">
                <RecipeListView />
              </Route>
              <Route path="/recipe/:id">
                <RecipeDetailView />
              </Route>
              <Redirect path="/" to="/recipe-list" />
            </Switch>
          </Router>
        </RecipeProvider>
      </FilterProvider>
    </ChakraProvider>
  );
};

export default Routes;
