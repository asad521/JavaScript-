import React,{Fragment} from "react";
import { selectBasket,add } from "../counter/shoppingSlice";
import { useSelector, useDispatch } from "react-redux";
export const Product = () => {

  console.log(selectBasket);
  const products = useSelector(selectBasket);
  const dispatch = useDispatch();
//   console.log(products + "This is products");


     return (
        <Fragment>
        {products.map((productItem) => 
          <button key={productItem.id} onClick={() => dispatch(add(productItem))}>{productItem.title}</button>
        )}
      </Fragment>
  );
};
export default Product;
