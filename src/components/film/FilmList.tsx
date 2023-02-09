import { useFilmsQuery } from "@/generated/graphql";
import { Box, SimpleGrid, Skeleton } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Waypoint } from "react-waypoint";
import FilmCard from "./FilmCard";

export default function FilmList() {
  const LIMIT = 6;

  const { data, loading, error, fetchMore } = useFilmsQuery({
    variables: {
      limit: LIMIT,
      cursor: 1,
    },
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  const skeleton = [0, 1, 2, 3, 4, 5].map((x) => (
    <Skeleton key={x} height="400px" />
  ));

  const filmList =
    data &&
    data.films.films.map((film, i) => (
      <Box key={film.id}>
        {data.films.cursor && i === data.films.films.length - LIMIT / 2 && (
          <Waypoint
            onEnter={() => {
              fetchMore({
                variables: {
                  limit: LIMIT,
                  cursor: data.films.cursor,
                },
              });
            }}
          />
        )}
        <FilmCard film={film} />
      </Box>
    ));

  if (error) return <p>{error.message}</p>;

  return (
    <SimpleGrid columns={[2, null, 3]} spacing={[2, null, 10]}>
      {loading && skeleton}
      {!loading && filmList}
    </SimpleGrid>
  );
}
