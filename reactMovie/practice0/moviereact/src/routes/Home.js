// --------- import ---------
import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
// --------- state ---------
const [loading, setLoading] = useState(true);
const [movies, setMovies] = useState([]);
const getMovies = async() => {
  const response = await fetch(
    `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
  )
  const json = await response.json();
  setMovies(json.data.movies);
  setLoading(false);  
  console.log(movies);
}
useEffect(() => {
  getMovies()
}, []);

// --------- function ---------


// --------- rendering ---------
return (
  <div>
    {loading ? <h1>Loading... Just wait a minute</h1> 
    : <div>{movies.map(movie => 
      (<Movie key={movie.id}
          id={movie.id}
          coverImage={movie.medium_cover_image}
          title={movie.title}
          summary={movie.summary}
          genres={movie.genres}        
          />
    ))}
    </div>}
    
  </div>
);
}

export default Home;