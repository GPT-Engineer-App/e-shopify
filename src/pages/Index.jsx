import React, { useState } from "react";
import { Box, Button, Flex, Grid, Heading, Image, Text, VStack, useColorModeValue, Radio, Stack, RadioGroup } from "@chakra-ui/react";
import FilterOptions from "../components/FilterOptions.jsx";
import { FaShoppingCart, FaSearch, FaUserCircle } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwMXxlbnwwfHx8fDE3MDg4NzExNTJ8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Product 2",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwMnxlbnwwfHx8fDE3MDg4NzExNTN8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    name: "Product 3",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1542319630-55fb7f7c944a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwM3xlbnwwfHx8fDE3MDg4NzExNTN8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 4,
    name: "Men's T-Shirt",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea",
    category: "men",
  },
  {
    id: 5,
    name: "Women's T-Shirt",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1523359346063-d879354c0ea1",
    category: "women",
  },
  {
    id: 6,
    name: "Kids' T-Shirt",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1520974735194-9e0c4d2d2354",
    category: "kids",
  },
  {
    id: 7,
    name: "Men's Trousers",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1588359348347-9bc6cbbb689e",
    category: "men",
  },
  {
    id: 8,
    name: "Women's Trousers",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1582552938351-1e40ef402538",
    category: "women",
  },
  {
    id: 9,
    name: "Kids' Trousers",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1582552938351-1e40ef402538",
    category: "kids",
  },
  {
    id: 10,
    name: "Casual Jacket",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
    category: "men",
  },
  {
    id: 11,
    name: "Elegant Dress",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1582552938351-1e40ef402538",
    category: "women",
  },
  {
    id: 12,
    name: "Cool Kid's Sneakers",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1515669097368-22e68427d265",
    category: "kids",
  },
  // Add more products as needed...
];

const ClothingSelection = ({ setCategory }) => {
  return (
    <RadioGroup onChange={setCategory} defaultValue="all">
      <Stack direction="row" mb={4}>
        <Radio value="men">Men</Radio>
        <Radio value="women">Women</Radio>
        <Radio value="kids">Kids</Radio>
      </Stack>
    </RadioGroup>
  );
};

const Index = () => {
  const [category, setCategory] = useState("all");
  const [colorTone, setColorTone] = useState("");
  const [bodyType, setBodyType] = useState("");
  const [bestSuitedColor, setBestSuitedColor] = useState("");

  const filteredProducts = products.filter((product) => {
    return (category === "all" || product.category === category) && (!bestSuitedColor || product.color === bestSuitedColor) && (!colorTone || product.colorTone === colorTone) && (!bodyType || product.bodyType === bodyType);
  });

  const bg = useColorModeValue("gray.50", "gray.800");
  const color = useColorModeValue("gray.800", "white");

  return (
    <Box bg={bg} color={color} minH="100vh" p={5}>
      {/* Header */}
      {/* Welcome Message */}
      <Box as="section" mb={10}>
        <Heading as="h2" size="lg" mb={4}>
          Welcome to Our E-Commerce Store!
        </Heading>
        <Text fontSize="md" mb={5}>
          Explore our wide range of products and enjoy a seamless shopping experience.
        </Text>
      </Box>

      {/* Product Grid */}
      {/* Category Selection */}
      <Box as="section" mb={10}>
        <ClothingSelection setCategory={setCategory} />
        {/* Existing FilterOptions component */}
        <FilterOptions setColorTone={setColorTone} setBodyType={setBodyType} setBestSuitedColor={setBestSuitedColor} colorTone={colorTone} />
      </Box>
      <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6}>
        {filteredProducts.map((product) => (
          <VStack key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} align="stretch" bg={useColorModeValue("white", "gray.700")}>
            <Image src={product.image} alt={product.name} boxSize="250px" objectFit="cover" />
            <Box p="6">
              <Box d="flex" alignItems="baseline">
                <Heading size="md" fontWeight="semibold" lineHeight="tight" isTruncated>
                  {product.name}
                </Heading>
              </Box>
              <Flex justify="space-between" align="center" mt={3}>
                <Text fontWeight="bold">${product.price}</Text>
                <Button colorScheme="teal" size="md" px={8}>
                  Add to Cart
                </Button>
              </Flex>
            </Box>
          </VStack>
        ))}
      </Grid>
    </Box>
  );
};

export default Index;
