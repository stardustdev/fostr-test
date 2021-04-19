import {
  Box,
  Heading,
  SimpleGrid,
  Stack,
  Tag,
  Text,
  useStyleConfig,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { useRecipesContext } from 'src/contexts';

const colors = ['green', 'red', 'blue', 'orange', 'pink'];

const RecipeList: React.FC = () => {
  const { recipes } = useRecipesContext();
  const styles = useStyleConfig('Card');
  return (
    <SimpleGrid columns={3} spacing={10} p={10}>
      {recipes.map((recipe) => (
        <Stack
          key={recipe.id}
          sx={styles}
          as={Link}
          to={`/recipe/${recipe.id}`}
        >
          <Heading size="md" fontWeight="bold">
            {recipe.title}
          </Heading>
          <Box maxWidth="md">
            <Text noOfLines={2}>{recipe.description}</Text>
          </Box>
          <Text>
            By{' '}
            <Text color="green" as="u" fontWeight="bold">
              {recipe.author.name}
            </Text>
          </Text>
          <SimpleGrid columns={4} spacing={4}>
            {recipe.tags.map((tag, index) => (
              <Tag color={colors[colors.length % index]}>{tag}</Tag>
            ))}
          </SimpleGrid>
        </Stack>
      ))}
    </SimpleGrid>
  );
};

export default RecipeList;
