"use client";

import FilmList from "@/components/film/FilmList";
import { Box, Heading } from "@chakra-ui/react";
import React from "react";

export default function Page() {
  return (
    <main>
      <Box>
        <Heading size="lg">최고의 장면을 찾아보세요</Heading>
        <FilmList />
      </Box>
    </main>
  );
}
