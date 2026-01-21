import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import { FormProvider } from "./components/FormContext.jsx";
import ListPage from "./pages/ListPage.jsx";
import NewPage from "./pages/NewPage.jsx";
import ConfirmPage from "./pages/ConfirmPage.jsx";
import CompletePage from "./pages/CompletePage.jsx";

export default function App() {
  return (
    <FormProvider>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{ color: "inherit", textDecoration: "none" }}
            >
              サンプルアプリ
            </Typography>
          </Toolbar>
        </AppBar>
        <Container sx={{ py: 4 }}>
          <Routes>
            <Route path="/" element={<ListPage />} />
            <Route path="/new" element={<NewPage />} />
            <Route path="/confirm" element={<ConfirmPage />} />
            <Route path="/complete" element={<CompletePage />} />
          </Routes>
        </Container>
      </Box>
    </FormProvider>
  );
}
