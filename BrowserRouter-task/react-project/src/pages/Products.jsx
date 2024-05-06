import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import "./product.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);

  const getAllData = async () => {
    const res = await axios("http://localhost:3000/products");
    setProducts(res?.data);
    setFilteredProduct(res?.data);
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Count</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Rate</TableCell>

            <TableCell>
              <button
                className="btn"
                onClick={() => {
                  let newArr = [...filteredProduct].sort((a, b) =>
                    a.title.localeCompare(b.title)
                  );
                  // console.log(newArr);
                  setFilteredProduct(newArr);
                }}
              >
                nameSort
              </button>
            </TableCell>
            <TableCell>
              <button
                className="btn"
                onClick={() => {
                  let newArr = [...filteredProduct].sort(
                    (a, b) => a.price - b.price
                  );
                  console.log(newArr);
                  setFilteredProduct(newArr);
                }}
              >
                PriceSort
              </button>
            </TableCell>
            <TableCell>
              <button
                className="btn"
                onClick={() => {
                  let newArr = [...filteredProduct].sort(
                    (a, b) => a.rating.count - b.rating.count
                  );
                  console.log(newArr);
                  setFilteredProduct(newArr);
                }}
              >
                countSort
              </button>
            </TableCell>
            <TableCell>
              <button
                className="btn"
                onClick={() => {
                  let newArr = [...filteredProduct].sort(
                    (a, b) => a.rating.rate - b.rating.rate
                  );
                  console.log(newArr);
                  setFilteredProduct(newArr);
                }}
              >
                RateSort
              </button>
            </TableCell>
            <TableCell>
              {" "}
              <input
                type="text"
                className="Inp"
                onChange={(e) => {
                  let searching = products.filter((elem) =>
                    elem.title
                      .toLowerCase()
                      .includes(e.target.value.toLowerCase())
                  );
                  setFilteredProduct(searching);
                }}
              />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredProduct.map((row) => (
            <TableRow
              className={
                row.rating.count < 100
                  ? "red"
                  : "yellow" && row.rating.count < 200
                  ? "yellow"
                  : "green"
              }
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>{row?.title}</TableCell>
              <TableCell>{row?.rating?.count}</TableCell>
              <TableCell>{row?.price}</TableCell>
              <TableCell>{row?.rating?.rate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Products;
