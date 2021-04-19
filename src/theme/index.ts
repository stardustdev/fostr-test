import { extendTheme } from '@chakra-ui/react';

import Card from './card';

const theme = extendTheme({
  components: {
    Card,
  },
});

export default theme;
