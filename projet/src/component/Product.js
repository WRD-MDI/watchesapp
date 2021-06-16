import React from "react";
import Productcard from "./Productcard";

const Product = (props) => {
  return (
    <div>
      {props.data.map((element) => (
        <Productcard element={element} />
      ))}
    </div>
  );
};

export default Product;
