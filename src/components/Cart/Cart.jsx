import React from "react";
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import "./Cart.scss";

function Cart() {
    
  const products = useSelector((state) => state.cart?.products);
  const dispatch = useDispatch()

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };

  return (
    <div className="cart">
      <h1>Your Shopping Cart</h1>
      {products?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">{item.quantity} x ${item.price}</div>
          </div>
          <DeleteOutlineIcon className="delete" onClick={() => dispatch(removeItem(item.id))} />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <div className="reset" onClick={() => dispatch(resetCart())}>Reset Cart</div>
    </div>
  );
}

export default Cart;
