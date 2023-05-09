import React from "react";
import { Route, Routes } from "react-router-dom";
import { Nav_bar } from "./Navbar/Navbar";
import { MantineProvider, AppShell, Header, Navbar } from "@mantine/core";
import { PostContent } from "./Post/PostList";
import { Headerbar } from "./Navbar/Header";
export const GameGram = () => {
  return (
    <>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "dark",
        }}
      >
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AppShell
                  padding="md"
                  navbar={
                    <Navbar width={{ base: 300 }} p="xs">
                      {<Nav_bar />}
                    </Navbar>
                  }
                  header={
                    <Header height={60} style={{ display: "flex" }} p="xs">
                      {<Headerbar />}
                    </Header>
                  }
                  styles={(theme) => ({
                    main: {
                      backgroundColor:
                        theme.colorScheme === "dark"
                          ? theme.colors.dark[8]
                          : theme.colors.gray[0],
                    },
                  })}
                >
                  {<PostContent />}
                </AppShell>
              </>
            }
          />
        </Routes>
      </MantineProvider>
    </>
  );
};
