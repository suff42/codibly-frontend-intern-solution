import { useContext } from "react";
import Table from "@mui/material/Table";
import {
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { ProductContextType } from "../../context/ProductContext.types";
import { ProductsContext } from "../../context/ProductsContext";

const Products = () => {
  const { products } = useContext(ProductsContext) as ProductContextType;

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
