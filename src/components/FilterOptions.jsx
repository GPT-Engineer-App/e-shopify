import React from "react";
import { Select, Box, Flex } from "@chakra-ui/react";

const FilterOptions = ({ setColorTone, setBodyType, setBestSuitedColor, colorTone }) => {
  const bestColors = {
    light: ["Pastel Blue", "Light Pink", "Lavender"],
    medium: ["Emerald Green", "Royal Blue", "Crimson"],
    dark: ["Teal", "Plum", "Burgundy"],
  };

  const handleColorToneChange = (e) => {
    setColorTone(e.target.value);
    setBestSuitedColor("");
  };
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
        <Box mr={4}>
          <Select placeholder="Select color tone" onChange={handleColorToneChange}>
            <option value="light">Light</option>
            <option value="medium">Medium</option>
            <option value="dark">Dark</option>
          </Select>
        </Box>
        <Box mr={4}>
          <Select placeholder="Select body type" onChange={(e) => setBodyType(e.target.value)}>
            <option value="slim">Slim</option>
            <option value="average">Average</option>
            <option value="athletic">Athletic</option>
            <option value="plus-size">Plus Size</option>
          </Select>
        </Box>
        <Box>
          <Select placeholder="Best Suited Color" value={colorTone ? "" : undefined} isDisabled={!colorTone} onChange={(e) => setBestSuitedColor(e.target.value)}>
            {colorTone &&
              bestColors[colorTone].map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
          </Select>
        </Box>
      </Box>
    </Flex>
  );
};

export default FilterOptions;
