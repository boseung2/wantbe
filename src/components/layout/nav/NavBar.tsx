import {
  Box,
  Flex,
  useColorModeValue,
  Link,
  Stack,
  Button,
} from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";

export default function NavBar() {
  return (
    <Box
      zIndex={10}
      position="fixed"
      w="100%"
      bg={useColorModeValue("white", "gray.800")}
      borderBottom={1}
      borderStyle="solid"
      borderColor={useColorModeValue("gray.200", "gray.700")}
      py={{ base: 2 }}
      px={{ base: 4 }}
    >
      <Flex
        maxW={960}
        color={useColorModeValue("gray.600", "gray.700")}
        minH="60px"
        align="center"
        m="auto"
      >
        <Flex flex={{ base: 1, md: "auto" }}>
          <Link
            as={NextLink}
            href="/"
            fontFamily="heading"
            fontWeight="bold"
            color={useColorModeValue("gray.800", "white")}
          >
            wantBe
          </Link>
        </Flex>

        <Stack justify="flex-end" direction="row" spacing={6}>
          {/* <ColorModeSwitcher /> */}
          <Button
            fontSize="sm"
            fontWeight={400}
            variant="link"
            as={NextLink}
            href="/login"
          >
            로그인
          </Button>
          <Button
            display={{ base: "none", md: "inline-flex" }}
            fontSize="sm"
            fontWeight={600}
            href="/signup"
            colorScheme="teal"
            as={NextLink}
          >
            시작하기
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
}
