import { useContext, useEffect, useState } from "react";
import Table from "@mui/material/Table";
import {
  Paper,
  styled,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Theme,
} from "@mui/material";
import {
  ProductContextType,
  ResponseI,
} from "../../context/ProductContext.types";
import { ProductsContext } from "../../context/ProductsContext";

const Products = () => {
  const { products, setProducts, setTotalPages } = useContext(
    ProductsContext
  ) as ProductContextType;

  useEffect(() => {
    fetch("https://reqres.in/api/products?per_page=5")
      .then((response) => response.json())
      .then((data: ResponseI) => {
        setProducts(data.data);
        setTotalPages(data.total_pages);
      });
  }, []);

  return (
    <TableContainer component={Paper} sx={{ width: "auto", minWidth: "400px" }}>
      <Table>
        <TableHead>
          <TableRow
            sx={{
              "& th": {
                backgroundColor: "#36304a",
                fontSize: "1.1rem",
                color: "#fff",
                border: "none",
              },
            }}
          >
            <TableCell>ID</TableCell>
            <TableCell sx={{}}>Name</TableCell>
            <TableCell>Year</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {products?.map((user, key) => (
            <TableRow
              hover
              key={user.id}
              sx={{
                "& td": {
                  backgroundColor: user.color,
                },
                "& td, & th": { border: 0 },
              }}
            >
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.year}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Products;
