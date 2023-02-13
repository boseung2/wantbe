import { useCutsQuery } from "@/generated/graphql";
import { Box, SimpleGrid, Spinner, Image } from "@chakra-ui/react";
import React from "react";
import LazyLoad from "react-lazyload";

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
        <LazyLoad height={200} once key={cut.id}>
          <Image src={cut.src} alt="cutImg" />
        </LazyLoad>
      ))}
    </SimpleGrid>
  );
}
