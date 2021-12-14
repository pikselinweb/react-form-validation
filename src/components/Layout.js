import React from "react";
// MATERIAL UI
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

// THEME CUSTOMIZATION FOR BG
const themeLight = createTheme({
  palette: {
    background: {
      default: "#EAEEF3",
    },
  },
});

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={themeLight}>
      <CssBaseline />
      <Container
        maxWidth="sm"
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          overflow: "auto",
        }}
      >
        <Card sx={{ width: "100%" }}>
          <CardContent>{children}</CardContent>
        </Card>
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
