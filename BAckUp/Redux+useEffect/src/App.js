import { useSelector, useDispatch } from 'react-redux';
import React,{ useEffect } from 'react';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { uiActions } from './store/ui-slice'
import Notification from './components/UI/Notification';

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) =>state.ui.cartIsVisibae)
  const cart = useSelector((state) => state.cart)
  const notification = useSelector(state => state.ui.notification)

  useEffect(()=>{
    const sendCartData = async() => {
      dispatch(uiActions.showNotification({
        status:'pending',
        title: 'Sending..',
        message: 'Sending cart data!'
      }))
      const responce = await fetch('https://react-http-30473-default-rtdb.firebaseio.com/cart.json',{
        method:'PUT',
        body:JSON.stringify(cart)
      })

      if(!responce.ok){
        throw new Error('Sending cart data failed.')
      }

      dispatch(uiActions.showNotification({
        status:'success',
        title: 'Success!',
        message: 'Send cart data successfully!'
      }))
    }

    if(isInitial){
      isInitial=false
      return
    }

    sendCartData().catch(error =>{
      dispatch(uiActions.showNotification({
        status:'error',
        title: 'Error!',
        message: 'Sending cart data!'
      }))
    })
  },[cart,dispatch])
  return (
    <>
    {notification && <Notification
      status={notification.status}
      title={notification.title}
      message={notification.message}
    />}
    <Notification/>
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
    </>
  );
}

export default App;
