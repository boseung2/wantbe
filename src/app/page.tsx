"use client";
import FilmList from "@/components/film/FilmList";
import { Box, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <main>
      <Box>
        <Text>Ghibli GraphQL</Text>
        <FilmList />
      </Box>
    </main>
  );
}
