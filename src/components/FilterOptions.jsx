import React from "react";
import { Select, Box, Flex } from "@chakra-ui/react";

const FilterOptions = ({ setColorTone, setBodyType }) => {
  return (
    <Flex mb={5}>
      <Box mr={4}>
        <Select placeholder="Select color tone" onChange={(e) => setColorTone(e.target.value)}>
          <option value="light">Light</option>
          <option value="medium">Medium</option>
          <option value="dark">Dark</option>
        </Select>
      </Box>
      <Box>
        <Select placeholder="Select body type" onChange={(e) => setBodyType(e.target.value)}>
          <option value="slim">Slim</option>
          <option value="average">Average</option>
          <option value="athletic">Athletic</option>
          <option value="plus-size">Plus Size</option>
        </Select>
      </Box>
    </Flex>
  );
};

export default FilterOptions;
