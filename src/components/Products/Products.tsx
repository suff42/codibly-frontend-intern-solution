import React, { useContext, useState } from "react";
import Table from "@mui/material/Table";
import {
  Box,
  Modal,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material";
import {
  ProductContextType,
  ProductI,
} from "../../context/ProductContext.types";
import { ProductsContext } from "../../context/ProductsContext";
import PageNumber from "../PageNumber/PageNumber";
import ProductDetails from "../ProductDetails/ProductDetailsI";
import { emptyProduct } from "../../utils/helpers";

const Products = () => {
  const { products, id } = useContext(ProductsContext) as ProductContextType;
  const [openModal, setOpenModal] = useState(false);
  const [activeProduct, setActiveProduct] = useState<ProductI>(emptyProduct);

  const handleOpenModal = (
    e: React.MouseEvent<HTMLTableRowElement>,
    product: ProductI
  ) => {
    console.log(product);
    setActiveProduct(product);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setActiveProduct(emptyProduct);
  };

  return (
    <>
      <TableContainer sx={{ width: "auto", minWidth: "400px" }}>
        <Table>
          <TableHead>
            <TableRow
              sx={{
                "& th": {
                  backgroundColor: (theme) => theme.palette.primary.dark,
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
            {products?.map((product) => (
              <TableRow
                onClick={(e) => handleOpenModal(e, product)}
                hover
                key={product.id}
                sx={{
                  "& td, & th": { border: 0 },
                  "&.MuiTableRow-root": {
                    backgroundColor: product.color,
                  },
                  "&.MuiTableRow-root:hover": {
                    backgroundColor: product.color,
                    outline: "3px solid black",
                    outlineOffset: "-3px",
                  },
                }}
              >
                <TableCell>{product.id}</TableCell>
                <TableCell align="center">{product.name}</TableCell>
                <TableCell align="right">{product.year}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {id ? null : <PageNumber />}
      <Modal open={openModal} onClose={handleCloseModal}>
        <>
          <ProductDetails details={activeProduct}></ProductDetails>
        </>
      </Modal>
    </>
  );
};

export default Products;
