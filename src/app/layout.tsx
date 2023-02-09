"use client";

import client from "@/apollo/apolloClient";
import ComomnLayout from "@/components/layout/ComomnLayout";
import ChakraUI from "@/config/ChakraUI";
import { ApolloProvider } from "@apollo/client";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <ApolloProvider client={client}>
          <ChakraUI>
            <ComomnLayout>{children}</ComomnLayout>
          </ChakraUI>
        </ApolloProvider>
      </body>
    </html>
  );
}
