import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  Typography
} from "@mui/material";
import { FormContext } from "../components/FormContext.jsx";

const API_BASE_URL = "http://localhost:8080/api/items";

export default function ConfirmPage() {
  const navigate = useNavigate();
  const { formData, setFormData } = useContext(FormContext);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleBack = () => {
    navigate("/new");
  };

  const handleSubmit = async () => {
    // 登録APIを呼び出す
    setIsSubmitting(true);
    try {
      await fetch(API_BASE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      setFormData({ name: "", description: "" });
      navigate("/complete");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 3 }}>
        確認
      </Typography>
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="subtitle1">名前</Typography>
          <Typography sx={{ mb: 2 }}>{formData.name || "未入力"}</Typography>
          <Typography variant="subtitle1">説明</Typography>
          <Typography>{formData.description || "未入力"}</Typography>
        </CardContent>
      </Card>
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" onClick={handleBack}>
          戻る
        </Button>
        <Button variant="contained" onClick={handleSubmit} disabled={isSubmitting}>
          登録する
        </Button>
      </Stack>
    </Box>
  );
}
