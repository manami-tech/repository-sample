import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography
} from "@mui/material";

const API_BASE_URL = "http://localhost:8080/api/items";

export default function ListPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // 一覧取得APIを呼び出す
    fetch(API_BASE_URL)
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch(() => setItems([]));
  }, []);

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
        <Typography variant="h4">一覧</Typography>
        <Button variant="contained" component={Link} to="/new">
          新規登録
        </Button>
      </Box>
      {items.length === 0 ? (
        <Typography color="text.secondary">データがありません。</Typography>
      ) : (
        <Grid container spacing={2}>
          {items.map((item) => (
            <Grid item xs={12} md={6} key={item.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography color="text.secondary">{item.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}
