import { useSelector } from 'react-redux';

import Counter from './components/Counter';
import Header from './components/Header'
import Auth from './components/Auth'
import UseProfile from './components/UserProfile'




function App() {
  const isAuth = useSelector(state => state.auth.isAuthenticated)
  return (
    <>
      <Header/> 
      {isAuth && <UseProfile/> }
      {!isAuth && <Auth/>}
      <Counter />
    </>
  );
}

export default App;
