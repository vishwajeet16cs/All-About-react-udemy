import { useSelector } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
// import { uiSlice } from './store/ui-slice'

function App() {
  const showCart = useSelector((state) =>{
    // console.log(state.ui.cartIsVisibae)
    return state.ui.cartIsVisibae
  })
  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
