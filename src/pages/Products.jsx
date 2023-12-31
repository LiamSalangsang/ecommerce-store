import React, { useEffect, useContext, useState, useCallback } from "react";
import { productsContext } from "../components/context";
import ProductCard from "../components/ProductCard";
import { useParams } from "react-router-dom";
import SearchInput from "../components/SearchInput";
import Header from "../components/commonUI/Header";
import SortBy from "../components/SortBy";
import { alphabetize } from "../../public/helper";

const Products = () => {
  const { products, categories } = useContext(productsContext);
  const { categoryid } = useParams();
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [sortOption, setSortOption] = useState("");
  const [filterProducts, setFilterProducts] = useState([]);

  const findTheCategory = useCallback(() => {
    setSelectedCategory(categories.find((group) => group.id == categoryid));
  }, [categoryid, categories]);

  useEffect(() => {
    optionSetter();
    findTheCategory()
  }, [sortOption, filterProducts, findTheCategory]);

  function optionSetter() {
    switch (sortOption) {
      case "A-Z":
        setFilterProducts(alphabetize(products));
        break;

      case "Z-A":
        setFilterProducts(alphabetize(products, false));
        break;

      case "Price High to Low":
        setFilterProducts(
          products.slice().sort((a, b) => {
            return -(a.price - b.price);
          })
        );
        break;

      case "Price Low to High":
        setFilterProducts(products.slice().sort((a, b) => a.price - b.price));
        break;

      case "Deals First":
        setFilterProducts(
          products.slice().sort((a, b) => -(a.deals[0] - b.deals[0]))
        );
        break;

      case "Customer Rating":
        setFilterProducts(
          products.slice().sort((a, b) => -(a.rating - b.rating))
        );
        break;

      default:
        setFilterProducts(products);
    }
  }

  return (
    <>
      <Header />
      <main>
        <div className="text-center flex flex-col justify-center ">
          {filterProducts ? (
            <>
              <h1 className="pt-[7rem] font-bold uppercase md:text-6xl text-4xl text-center">
                {categoryid
                  ? `${selectedCategory ? selectedCategory.name : ""}`
                  : "SHOP ALL"}
              </h1>
              <div className="mt-8 flex gap-4 justify-center items-center">
                <div className="w-[10rem]">
                  <SearchInput />
                </div>
           
                <SortBy sortOptionSet={setSortOption} />
              </div>
              <div className="flex justify-center">
                <section className="flex flex-wrap md:w-[80%] justify-center mt-6">
                  {categoryid
                    ? filterProducts
                        .filter(
                          (item) => item.category_id == parseInt(categoryid)
                        )
                        .map((product) => (
                          <div key={product.id}>
                            <ProductCard item={product} deal={product.deals} />
                          </div>
                        ))
                    : products &&
                      (sortOption ? filterProducts : products).map((item) => (
                        <div key={item.id}>
                          <ProductCard item={item} deal={item.deals} />
                        </div>
                      ))}
                </section>
              </div>
            </>
          ) : (
            <div>Loading</div>
          )}
        </div>
        <div></div>
      </main>
    </>
  );
};

export default Products;
