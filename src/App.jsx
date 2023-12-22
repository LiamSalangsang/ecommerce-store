import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "./routes/Routing";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { productsContext, searchContext } from "./components/context";
import { fetchProducts, fetchCategories } from "./data/services";

const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const App = () => {
  const [products, setProducts] = useState([]);
  const cartProducts = new Array();
  const [searchValue, setSearchValue] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getProductsData();
    getCategoriesData();
  }, []);

  const getProductsData = async () => {
    try {
      const data = await fetchProducts();
      setProducts(data);
    } catch (error) {
      console.log("error has occurred");
    }
  };

  const getCategoriesData = async () => {
    try {
      const data = await fetchCategories();
      setCategories(data);
    } catch (error) {
      console.log("error has occurred");
    }
  };

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <BrowserRouter>
          <productsContext.Provider
            value={{ products, cartProducts, categories }}
          >
            <searchContext.Provider value={{ searchValue, setSearchValue }}>
              <Routing />
            </searchContext.Provider>
            {/* <Footer/> */}
          </productsContext.Provider>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
