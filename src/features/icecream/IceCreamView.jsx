import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./iceCreamSlice";

const IceCreamView = () => {
  const numOfIcecreams = useSelector((state) => state.iceCream.numOfIcecreams);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Ice creams:- {numOfIcecreams}</h2>
      <button onClick={() => dispatch(ordered())}>Order Ice Cream</button>
      <button onClick={() => dispatch(restocked(5))}>Restock Ice creams</button>
    </div>
  );
};

export default IceCreamView;
