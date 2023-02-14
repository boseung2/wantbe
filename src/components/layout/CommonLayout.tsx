import { BackgroundProps, Box } from "@chakra-ui/react";
import React from "react";
import NavBar from "./nav/NavBar";

interface CommonLayoutProps {
  bg?: BackgroundProps["bg"];
  children: React.ReactNode;
}

export default function CommonLayout({ children, bg }: CommonLayoutProps) {
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
