"use client";
import FilmList from "@/components/film/FilmList";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <main>
      <Box>
        <Heading size="lg">최고의 장면을 찾아보세요</Heading>
        <FilmList />
      </Box>
    </main>
  );
}
