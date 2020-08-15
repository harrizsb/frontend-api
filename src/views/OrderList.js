import React, { useEffect, useState } from "react";
import { ax } from "../helpers/constant";
import List from "../components/List";
import Product from "../components/Product";

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const {
        data: { data: res },
      } = await ax.get("/orders");
      setOrders(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return orders ? (
    orders.map((val) => {
      return (
        <List key={val._id} nested>
          <Product
            order_id={val.order_id}
            invoice_number={val.invoice_number}
            buyer_name={val.buyer_name}
          />
          {val.products &&
            val.products.map((val, index) => {
              return (
                <Product
                  nestedList
                  key={index}
                  product_id={val.product_id}
                  name={val.name}
                  desc={val.desc}
                  price={val.price}
                />
              );
            })}
        </List>
      );
    })
  ) : (
    <span>no orders found</span>
  );
};

export default OrderList;
