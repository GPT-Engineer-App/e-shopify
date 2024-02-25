import React from "react";
import { Flex, Link, Box, Heading } from "@chakra-ui/react";
import { FaShoppingCart, FaSearch, FaUserCircle } from "react-icons/fa";

const NavigationBar = () => {
  return (
    <Flex as="nav" justify="space-between" align="center" p={5} bg="blue.500" color="white">
      <Heading as="h1" size="lg" letterSpacing={"tighter"}>
        E-Commerce
      </Heading>
      <Flex>
        <Link href="/" p={2}>
          Home
        </Link>
        <Link href="/virtual-try-on" p={2}>
          Virtual Try-On
        </Link>
        {/* Add other navigation links as needed */}
      </Flex>
      <Flex>
        <Link href="#" p={2} leftIcon={<FaSearch />}>
          Search
        </Link>
        <Link href="#" p={2} leftIcon={<FaUserCircle />}>
          Account
        </Link>
        <Link href="#" p={2} leftIcon={<FaShoppingCart />}>
          Cart
        </Link>
      </Flex>
    </Flex>
  );
};

export default NavigationBar;
