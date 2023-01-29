import { useContext } from "react";
import Table from "@mui/material/Table";
import {
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useTheme,
} from "@mui/material";
import { ProductContextType } from "../../context/ProductContext.types";
import { ProductsContext } from "../../context/ProductsContext";
import PageNumber from "../PageNumber/PageNumber";

const Products = () => {
  const { products, id } = useContext(ProductsContext) as ProductContextType;
  const theme = useTheme();

  return (
    <>
      <TableContainer sx={{ width: "auto", minWidth: "400px" }}>
        <Table>
          <TableHead>
            <TableRow
              sx={{
                "& th": {
                  backgroundColor: theme.palette.primary.dark,
                  fontSize: "1.1rem",
                  color: "#fff",
                  border: "none",
                },
              }}
            >
              <TableCell>ID</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="right">Year</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {products?.map((user) => (
              <TableRow
                hover
                key={user.id}
                sx={{
                  "& td, & th": { border: 0 },
                  "&.MuiTableRow-root": {
                    backgroundColor: user.color,
                  },
                  "&.MuiTableRow-root:hover": {
                    backgroundColor: user.color,
                    outline: "3px solid black",
                    outlineOffset: "-3px",
                  },
                }}
              >
                <TableCell>{user.id}</TableCell>
                <TableCell align="center">{user.name}</TableCell>
                <TableCell align="right">{user.year}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {id ? null : <PageNumber />}
    </>
  );
};

export default Products;
