import React, { useContext } from "react";
import { Routes, Route, Link, Navigate, useLocation } from "react-router-dom";
import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import { FormProvider } from "./components/FormContext.jsx";
import { AuthContext, AuthProvider } from "./components/AuthContext.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ListPage from "./pages/ListPage.jsx";
import NewPage from "./pages/NewPage.jsx";
import ConfirmPage from "./pages/ConfirmPage.jsx";
import CompletePage from "./pages/CompletePage.jsx";

function RequireAuth({ children }) {
  const { session } = useContext(AuthContext);
  const location = useLocation();

  if (!session) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
}

export default function App() {
  return (
    <AuthProvider>
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
              <Route path="/" element={<LoginPage />} />
              <Route
                path="/list"
                element={
                  <RequireAuth>
                    <ListPage />
                  </RequireAuth>
                }
              />
              <Route
                path="/new"
                element={
                  <RequireAuth>
                    <NewPage />
                  </RequireAuth>
                }
              />
              <Route
                path="/confirm"
                element={
                  <RequireAuth>
                    <ConfirmPage />
                  </RequireAuth>
                }
              />
              <Route
                path="/complete"
                element={
                  <RequireAuth>
                    <CompletePage />
                  </RequireAuth>
                }
              />
            </Routes>
          </Container>
        </Box>
      </FormProvider>
    </AuthProvider>
  );
}
