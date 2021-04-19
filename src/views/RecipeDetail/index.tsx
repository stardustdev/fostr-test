import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import {
  Box,
  Divider,
  Heading,
  HStack,
  Stack,
  Text,
  useStyleConfig,
} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

import { useRecipesContext } from 'src/contexts';

const RecipeDetail: React.FC = () => {
  const match = useRouteMatch<{ id: string }>();
  const { recipes } = useRecipesContext();
  const recipe = recipes.find((e) => e.id.toString() === match.params.id);
  const infoStyle = useStyleConfig('Card');

  return (
    <Box margin={5}>
      <Stack>
        <HStack>
          <Text>
            By{' '}
            <Text color="grey" as="span">
              {recipe?.author.name}
            </Text>
          </Text>
          <Box sx={infoStyle}>
            <Text>Prep: {recipe?.prep_time_min} mins</Text>
            {recipe?.cook_time_min && (
              <Text>Cook: {recipe?.cook_time_min} mins</Text>
            )}
            <Text>Servings: {recipe?.servings}</Text>
          </Box>
        </HStack>
        <Divider />
        <Box>
          <Heading size="md">Ingredients</Heading>
          <Stack mt={4}>
            {recipe?.ingredients.map((ingredient) => (
              <Text key={ingredient}>{ingredient}</Text>
            ))}
          </Stack>
        </Box>
        <Divider />
        <Box>
          <Heading size="md">Directions</Heading>
          <Stack mt={4}>
            {recipe?.directions.map((direction, index) => (
              <Box key={direction}>
                <Text>
                  <CheckCircleIcon /> Step {index + 1}
                </Text>
                <Text>{direction}</Text>
              </Box>
            ))}
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default RecipeDetail;
