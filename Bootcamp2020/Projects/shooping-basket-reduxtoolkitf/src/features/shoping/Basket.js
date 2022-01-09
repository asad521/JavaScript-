import React,{Fragment} from 'react'
import { selectBasket } from "../counter/shoppingSlice";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../counter/shoppingSlice";


export const Basket = () => {
    const basket = useSelector(selectBasket);
    const dispatch = useDispatch();
    return (
        <Fragment>
        {basket.map((item) => 
            {if(item.added){
                return <button  key={item.id} onClick={()=>dispatch(remove(item))}>{item.title}</button>
            }}
        )}
      </Fragment>
       
    )
}
export default Basket;
