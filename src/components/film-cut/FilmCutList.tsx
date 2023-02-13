import { useCutsQuery } from "@/generated/graphql";
import { Box, SimpleGrid, Spinner, Image } from "@chakra-ui/react";
import React from "react";

interface FilmCutListProps {
  filmId: number;
}

export default function FilmCutList({ filmId }: FilmCutListProps) {
  const { data, loading } = useCutsQuery({ variables: { filmId } });

  if (loading) {
    return (
      <Box textAlign="center" my={10}>
        <Spinner />
      </Box>
    );
  }

  return (
    <SimpleGrid my={4} columns={[1, 2, null, 3]} spacing={[2, null, 8]}>
      {data?.cuts.map((cut) => (
        <Image src={cut.src} key={cut.id} alt="cutImg" />
      ))}
    </SimpleGrid>
  );
}
