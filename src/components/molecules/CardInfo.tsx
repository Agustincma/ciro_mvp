"use client";

import * as React from "react";
import { Card, CardContent, Typography, Box, Chip, IconButton } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";

type CardDataInfo = {
  title?: string;
  description?: string;
  chips?: string[];
  category?: string;
  image?: string;
};

export const CardInfo: React.FC<CardDataInfo> = ({
  title = "Create Amazing Design Innovations",
  description = "dddddd",
  chips = ["UI/UX DESIGN", "PRODUCT DESIGN", "WEB DEVELOPMENT", "BRANDING"],
  category = "completar",
  image = "/pexels-kindelmedia-9875408.jpg"
}) => {
  return (
    <Card
      sx={{
        maxWidth: 450,
        minHeight: 500,
        borderRadius: 2,
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: "#fff",
        p: 3,
        boxShadow: 6,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Header */}
      <CardContent>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", lineHeight: 1.2 }}
        >
          {title}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mt: 2,
            opacity: 0.9,
            backgroundColor: "rgba(36, 36, 36, 0.3)",

            p: 1,
            borderRadius: 2,
          }}
        >
          {description}
        </Typography>


        {/* Chips */}
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 3}}>
          {chips.map((chip, index) => (
            <Chip
              key={index}
              label={chip}
              sx={{
                backgroundColor: "#fbbf24",
                color: "#fff",
                borderRadius: "20px",
                fontWeight: 'bold',
              }}
            />
          ))}
        </Box>
      </CardContent>

      {/* Footer */}
      <Box
        sx={{
          backgroundColor: "#363636",
          borderRadius: "12px",
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: 3,
        }}
      >
        <Typography variant="body1" fontWeight="bold" color="#fff">
          {category}
        </Typography>
        <IconButton sx={{ color: "#fff" }}>
          <ArrowForward />
        </IconButton>
      </Box>
    </Card>
  );
};

export default CardInfo;
