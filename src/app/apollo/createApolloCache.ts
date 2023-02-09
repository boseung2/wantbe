import { PaginatedFilms } from "@/generated/graphql";
import { InMemoryCache } from "@apollo/client";

export const createApolloCache = () =>
  new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          films: {
            keyArgs: false,
            merge: (
              existing: PaginatedFilms | undefined,
              incoming: PaginatedFilms
            ): PaginatedFilms => ({
              cursor: incoming.cursor,
              films: existing
                ? [...existing.films, ...incoming.films]
                : incoming.films,
            }),
          },
        },
      },
    },
  });
