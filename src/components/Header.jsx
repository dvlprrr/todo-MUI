import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { Container, Typography } from "@mui/material";

function Header() {
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: 32,
        fontWeight: 800,
      },
    },
  });
  return (
    <Container
      sx={{ display: "flex", justifyContent: "space-between" }}
      maxWidth="md"
    >
      <ThemeProvider theme={theme}>
        <Typography mt={3} mb={3} variant="h1" gutterBottom>
          ToDo
        </Typography>
        <Typography mt={3} mb={3} variant="h2" gutterBottom>
          ToDo
        </Typography>
      </ThemeProvider>
    </Container>
  );
}

export default Header;
