import React from "react";
import { listProducts } from "./component/Data";
import Product from "./component/Product";
import { Route } from "react-router-dom";
import Singleproduct from "./component/Singleproduct";

function App() {
  return (
    <div className="App">
      <Route exact path="/" render={() => <Product data={listProducts} />} />
      <Route
        exact
        path="/products/:id"
        render={(props) => <Singleproduct data={listProducts} {...props} />}
      />
    </div>
  );
}

export default App;
