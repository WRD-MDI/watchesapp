import React from "react";
import { Link } from "react-router-dom";

const Productcard = (props) => {
  return (
    <Link to={`/products/${props.element.id}`}>
      <div>
        <span>{props.element.name}</span>
        <span>{props.element.description}</span>
        <img src={props.element.img} alt="pic" width="200px" />
      </div>
    </Link>
  );
};

export default Productcard;
