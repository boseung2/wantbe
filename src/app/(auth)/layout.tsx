"use client";

import CommonLayout from "@/components/layout/CommonLayout";
import { Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box bg={useColorModeValue("gray.50", "gray.800")}>
      <CommonLayout>
        <main>{children}</main>
      </CommonLayout>
    </Box>
  );
}
