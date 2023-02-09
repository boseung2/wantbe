"use client";
import FilmDetail from "@/components/film/FilmDetail";
import { useFilmQuery } from "@/generated/graphql";
import { Box, Spinner, Text } from "@chakra-ui/react";
import React from "react";

interface PageParams {
  params: {
    filmId: string;
  };
}

export default function Page({ params }: PageParams) {
  const { data, loading, error } = useFilmQuery({
    variables: {
      filmId: Number(params.filmId),
    },
  });

  return (
    <main>
      {loading && <Spinner />}
      {error && <Text>페이지를 표시할 수 없습니다.</Text>}

      {params.filmId && data?.film && <FilmDetail film={data?.film} />}
    </main>
  );
}
