import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import { Product } from "./features/shoping/Product";
import { Basket } from "./features/shoping/Basket";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Counter />
      <Container maxWidth="md">
        <Box mt={5} mb={5}>
          <Product />
        </Box>
        <Box mt={5} mb={5}>
          <Basket />
        </Box>
      </Container>
    </div>
  );
}

export default App;
