import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
  return async(dispatch) => {
    const fetchData = async () => {
      const responce = await fetch(
        "https://react-http-30473-default-rtdb.firebaseio.com/cart.json"
      );

      if (!responce.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const data = await responce.json();
      return data;
    };

    try {
      const cartData =await fetchData();// catch data which above function return
      console.log("cartData->",cartData)
      dispatch(cartActions.replaceCart({
          items:cartData.items || [],
          totalQuantity:cartData.totalQuantity
      }))
        // console.log("cartData",cartData) 

      
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed!",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "success",
        title: "Success!",
        message: "Send cart data successfully!",
      })
    );
    const sendRequest = async () => {
      const responce = await fetch(
        "https://react-http-30473-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
            // data:"hello"
          }),
        }
      );
        // console.log("responce->",responce)
      if (!responce.ok) {
        throw new Error("Sending cart data failed.");
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Send cart data successfully!",
        })
      );
    } catch (error) {
      sendCartData().catch((error) => {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Error!",
            message: "Sending cart data failed!",
          })
        );
      });
    }
  };
};
