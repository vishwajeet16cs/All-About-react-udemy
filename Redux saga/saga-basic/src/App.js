 import { useEffect } from 'react';
 import { useSelector,useDispatch } from 'react-redux';
 import { getCatsFetch } from './catState';

import './App.css';

function App() {      
  const cats = useSelector(state=>state.cats.cats)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getCatsFetch())
  },[dispatch])
  console.log(cats);

  return (
    <div className="App">
      <h1>Cat species gallery</h1>
      <p>Image of different species of cats. lots of cats for your viewing pleasure.</p>
      <div className="Gallery">
        {cats.map((cat)=>{
          return <div key={cat.id } className="row">
          <div className="column column-left">
            <img src={cat.image.url} alt={cat.name} width="200" height="200" />
          </div>
          <div className="column column-right">
            <h2>{cat.name}</h2>
            <h5>Temperament: {cat.temperament}</h5>
            <p>{cat.description}</p>
          </div>
          </div>
        })
        }
      </div>
    </div>
  );
}

export default App;
