import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

export default function CompletePage() {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 2 }}>
        登録完了
      </Typography>
      <Typography sx={{ mb: 3 }}>登録が完了しました。</Typography>
      <Button variant="contained" component={Link} to="/list">
        一覧へ戻る
      </Button>
    </Box>
  );
}
