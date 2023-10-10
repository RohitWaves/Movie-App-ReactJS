import React,{useState} from "react";
import Moviecard from "./Moviecard";
import { movies } from "../utility/Moviedata";
import Shimmer from "./Shimmer";

const Home = () => {

    const[movie,setMovie] = useState(movies);

    const[text,setText] = useState('');

     const Topmovies = () => {
        const result =  movie.filter((top) => top.rating > 8);
        return result;
     }
    
     const Searchmovies = () => {
         const data = movie.filter((info) => info.title.toLowerCase().includes(text.toLowerCase()));
         return data;
     }
     
    return movie.length === 0 ? (<Shimmer />) : (

        <div className="movie-container">
           <div className="search">
            <button onClick={() => setMovie(Topmovies())}>Top Rated Movie</button>
         </div>
         <div>
           <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
           <button onClick={()=>setMovie(Searchmovies())}>Search Shows</button>
          </div>
       
          <div className="horizontal-cards">
        {movie.map((list) => {
          return <Moviecard key={list.id} resmovies={list} />;
        })}
      </div>

           

</div>
    )
}

export default Home;