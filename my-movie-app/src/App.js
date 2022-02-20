import React, { useEffect, useState, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import AddMovie from './components/AddMovie';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading,setIsLoading] = useState(false) 
  const [error,setError] = useState(null);

  const fetchMoviesHandler= useCallback(async ()=> {
    console.log("fetchMoviesHandler method check")
    setIsLoading(true);
    setError(null)
    try{
      const responce=await fetch('https://react-http-30473-default-rtdb.firebaseio.com/movies.json')
      
      if(!responce.ok){
        throw new Error('Something went wrong!');        
      }
      
      const data=await responce.json()
      // console.log("get data",data)

      const loadeMovies = [];

      for(const key in data){
         loadeMovies.push({
           id:key,
           title:data[key].title,
           openingText:data[key].openingText,
            releaseDate:data[key].releaseDate
         })
      }

          /* const transformedMovies = data.results.map((movieData) => {
            return {
              id: movieData.episode_id,
              title: movieData.title,
              openingText: movieData.opening_crawl,
              releaseDate: movieData.release_date,
            };
          }); */
          setMovies(loadeMovies);
    }catch(error){
      setError(error.message)
    }
    setIsLoading(false)
    
  },[])

  useEffect(()=>{
    fetchMoviesHandler()
  },[fetchMoviesHandler])

  const addMovieHandler=async (movie)=>{
      const response= await fetch('https://react-http-30473-default-rtdb.firebaseio.com/movies.json',{
      method:'POST',
      body:JSON.stringify(movie),
      header:{
        'context-type':'application/json'
      }
    })
    const data= await response.json()
    console.log(data)
  }
  let content = <p>Found no Movies.</p>

  if(movies.length>0){
    content =  <MoviesList movies={movies} />
  }
  if(error){
    content = <p>{error}</p>
  }
  if(isLoading){
    content=<p>loading...</p>
  }
  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler}/>
      </section>
      <section>
      <h6>{JSON.stringify(movies)}</h6>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;




{/* <section>
        {!isLoading && movies.length > 0 && <MoviesList mov ies={movies} />}
        {!isLoading && movies.length===0 && !error && <p>Found no Movies</p>}
        {!isLoading && error && <p>{error}</p>} 
        {isLoading && <p>Loading...</p>}
      </section> */}