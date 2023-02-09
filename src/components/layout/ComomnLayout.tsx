import { BackgroundProps, Box, Flex } from "@chakra-ui/react";
import React from "react";
import NavBar from "./nav/NavBar";

interface ComomnLayoutProps {
  bg?: BackgroundProps["bg"];
  children: React.ReactNode;
}

export default function ComomnLayout({ children, bg }: ComomnLayoutProps) {
  return (
    <div>
      <NavBar />
      <Box
        px={{ base: 4 }}
        pt={24}
        mx="auto"
        maxW="960px"
        minH="100vh"
        w="100%"
        bg={bg}
      >
        {children}
      </Box>
    </div>
  );
}
