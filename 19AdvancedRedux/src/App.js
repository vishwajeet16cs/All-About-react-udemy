import { useSelector, useDispatch } from 'react-redux';
import React,{ useEffect } from 'react';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { fetchCartData, sendCartData } from './store/card-action';
import Notification from './components/UI/Notification';

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) =>state.ui.cartIsVisibae)
  const cart = useSelector((state) => state.cart)
  const notification = useSelector(state => state.ui.notification)

  useEffect(()=>{
    dispatch(fetchCartData())
  },[dispatch])
  useEffect(()=>{

    if(isInitial){
      isInitial=false
      return
    }

    // console.log(cart.changed)
    if(cart.changed){
      dispatch(sendCartData(cart))
    }
  },[cart,dispatch])
  return (
    <>
    {/* {console.log(notification)} */}
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
