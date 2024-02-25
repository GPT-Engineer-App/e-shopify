import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";

const ClothingSelection = ({ setCategory }) => {
  return (
    <Box mb={5}>
      <Text fontSize="lg" mb={3}>
        Select a category:
      </Text>
      <Button mr={2} onClick={() => setCategory("men")}>
        Men
      </Button>
      <Button mr={2} onClick={() => setCategory("women")}>
        Women
      </Button>
      <Button onClick={() => setCategory("kids")}>Kids</Button>
    </Box>
  );
};

export default ClothingSelection;
