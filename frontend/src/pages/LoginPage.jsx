import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { AuthContext } from "../components/AuthContext.jsx";

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { session, setSession } = useContext(AuthContext);
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = () => {
    // 本実装では認証APIを呼び出す想定
    const nextSession = {
      username: formData.username.trim(),
      loggedInAt: new Date().toISOString()
    };
    setSession(nextSession);
    const destination = location.state?.from?.pathname ?? "/list";
    navigate(destination);
  };

  const isDisabled = formData.username.trim() === "" || formData.password.trim() === "";

  useEffect(() => {
    if (session) {
      navigate("/list");
    }
  }, [navigate, session]);

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 3 }}>
        ログイン
      </Typography>
      <Stack spacing={2}>
        <TextField
          label="ユーザー名"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <TextField
          label="パスワード"
          name="password"
          value={formData.password}
          onChange={handleChange}
          type="password"
          required
        />
        <Box>
          <Button variant="contained" onClick={handleLogin} disabled={isDisabled}>
            ログイン
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}
