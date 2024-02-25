import React from "react";
import { Flex, Link, Box, Heading } from "@chakra-ui/react";
import { FaShoppingCart, FaSearch, FaUserCircle } from "react-icons/fa";

const NavigationBar = () => {
  return (
    <Flex as="nav" justify="space-between" align="center" p={5} bg="blue.500" color="white">
      <Heading as="h1" size="lg" letterSpacing={"tighter"}>
        Fahverse.com
      </Heading>
      <Flex>
        <Link href="/" p={2}>
          Home
        </Link>
        <Link href="/virtual-try-on" p={2}>
          Virtual Try-On
        </Link>
        <Link href="/create-avatar" p={2}>
          Create Avatar
        </Link>
        <Link href="?category=men" p={2}>
          Men
        </Link>
        <Link href="?category=women" p={2}>
          Women
        </Link>
        <Link href="?category=kids" p={2}>
          Kids
        </Link>
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
