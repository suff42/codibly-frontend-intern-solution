import React from "react";
import { Box, Typography } from "@mui/material";
import { ProductI } from "../../context/ProductContext.types";

interface ProductDetailsI {
  details: ProductI;
}

const style = (bgColor: string) => {
  return {
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    // gap: "1rem",
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    minHeight: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: "10px",
  };
};
const ProductDetails: React.FC<ProductDetailsI> = ({ details }) => {
  return (
    <Box sx={style(details.color)}>
      <Box bgcolor={details.color} width="280px" height="280px" />
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        PANTONE {details.pantone_value}
      </Typography>
      <Typography variant="h6">{details.name}</Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">Hex {details.color}</Typography>
        <Typography variant="h6">{details.year}</Typography>
      </Box>
    </Box>
  );
};

export default ProductDetails;
