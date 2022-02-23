import { useSelector } from "react-redux";

import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const CartItems = useSelector((state) => state.cart.items);
  // console.log(CartItems)
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {CartItems.map((item) =>( 
          <CartItem
          key={item.id}
            item={{ 
              id:item.id,
              title: item.title,
               quantity: item.quantity,
                total: item.totalPrice, 
                price:item.price 
              }}
          />
        ))}
        {/* <CartItem
          item={{ title: 'Test Item', quantity: 3, total: 18, price: 6 }}
        /> */}
      </ul>
    </Card>
  );
};

export default Cart;
