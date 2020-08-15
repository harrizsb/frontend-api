import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import ProductList from "./views/ProductList";
import OrderList from "./views/OrderList";

const Navbar = lazy(() => import("./components/Navbar"));

function App() {
  return (
    <Router>
      <Suspense fallback={<span>loading component</span>}>
        <Navbar>
          <Link to="/products">Products</Link>
          <Link to="/orders">Orders</Link>
        </Navbar>
      </Suspense>

      <Switch>
        <Route path="/products">
          <ProductList />
        </Route>
        <Route path="/orders">
          <OrderList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
