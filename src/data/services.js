import { productsURL, categoriesURL } from "./api";
import axios from "axios";

export async function fetchProducts() {
  try {
    const response = await axios.get(productsURL);
    if (response) {
      return response.data;
    }
  } catch (error) {
    throw new Error("error fetching the products data");
  }
}

export async function fetchCategories() {
  try {
    const response = await axios.get(categoriesURL);
    if (response) {
      return response.data;
    }
  } catch (error) {
    throw new Error("error fetching the categories data");
  }
}
