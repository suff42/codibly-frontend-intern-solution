import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import {
  Paper,
  styled,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Theme,
} from "@mui/material";

interface UserI {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
}

const Products = () => {
  const [products, setProducts] = useState<UserI[]>([]);

  useEffect(() => {
    fetch("https://reqres.in/api/products?per_page=5")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.data);
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
          {products.map((user, key) => (
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
