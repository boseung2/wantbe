"use client";
import SignUpForm from "@/components/auth/SignUpForm";
import { Flex } from "@chakra-ui/react";
import React from "react";

export default function Page() {
  return (
    <Flex align="center" justify="center">
      <SignUpForm />
    </Flex>
  );
}
