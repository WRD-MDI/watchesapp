import React, { useEffect, useState } from "react";

const Singleproduct = ({ match, data }) => {
  //   console.log("d", data);
  //   console.log("d", match);
  const [prodId, setProdId] = useState({});
  useEffect(() => setProdId(data.find((el) => el.id == match.params.id)));

  //   console.log("p", prodId);

  return (
    <div>
      <span>{prodId.name}</span>
      <span>{prodId.description}</span>
      <img src={prodId.img} alt="pic" width="200px" />
    </div>
  );
};

export default Singleproduct;
