"use client";
import FilmList from "@/components/film/FilmList";
import CommonLayout from "@/components/layout/CommonLayout";
import { Box, Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <CommonLayout>
      <main>
        <Box>
          <Heading size="lg">최고의 장면을 찾아보세요</Heading>
          <FilmList />
        </Box>
      </main>
    </CommonLayout>
  );
}
