import {
  Box,
  Flex,
  useColorModeValue,
  Link,
  Stack,
  Button,
  Avatar,
} from "@chakra-ui/react";
import React, { useMemo } from "react";
import NextLink from "next/link";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { useMeQuery } from "../../../generated/graphql";

export default function NavBar() {
  const accessToken = localStorage.getItem("access_token");
  const { data } = useMeQuery({ skip: !accessToken });
  const isLoggedIn = useMemo(() => {
    if (accessToken) return data?.me?.id;
    return false;
  }, [accessToken, data?.me?.id]);

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

        {isLoggedIn ? <LoggedInNavbarItem /> : <LoggedOutNavbarItem />}
      </Flex>
    </Box>
  );
}

function LoggedInNavbarItem() {
  return (
    <Stack justify="flex-end" alignItems="center" direction="row" spacing={3}>
      <ColorModeSwitcher />
      <Avatar size="sm" />
    </Stack>
  );
}

function LoggedOutNavbarItem() {
  return (
    <Stack justify="flex-end" direction="row" spacing={6}>
      <ColorModeSwitcher />
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
  );
}
