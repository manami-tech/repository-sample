import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { FormContext } from "../components/FormContext.jsx";

export default function NewPage() {
  const navigate = useNavigate();
  const { formData, setFormData } = useContext(FormContext);
  const [localData, setLocalData] = useState(formData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLocalData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    // 入力内容をコンテキストに保存
    setFormData(localData);
    navigate("/confirm");
  };

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 3 }}>
        新規登録
      </Typography>
      <Stack spacing={2}>
        <TextField
          label="名前"
          name="name"
          value={localData.name}
          onChange={handleChange}
          required
        />
        <TextField
          label="説明"
          name="description"
          value={localData.description}
          onChange={handleChange}
          multiline
          rows={4}
        />
        <Box>
          <Button variant="contained" onClick={handleNext}>
            確認へ進む
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}
