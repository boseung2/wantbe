"use client";
import LoginForm from "@/components/auth/LoginForm";
import { Flex } from "@chakra-ui/react";
import React from "react";

export default function Page() {
  return (
    <Flex align="center" justify="center">
      <LoginForm />
    </Flex>
  );
}
