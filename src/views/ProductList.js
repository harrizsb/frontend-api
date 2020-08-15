import React, { useEffect, useState } from "react";
import { ax } from "../helpers/constant";
import List from "../components/List";
import Product from "../components/Product";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const {
        data: { data: res },
      } = await ax.get("/products");
      setProducts(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return products ? (
    products.map((val) => {
      return (
        <List key={val._id}>
          <Product
            product_id={val.product_id}
            name={val.name}
            desc={val.desc}
            price={val.price}
          />
        </List>
      );
    })
  ) : (
    <span>no products found</span>
  );
};

export default ProductList;
