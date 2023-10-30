import React,{useState} from "react";
import Moviecard from "./Moviecard";
import { movies } from "../utility/Moviedata";
import LoaderComp from "./Loader";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utility/userOnlineStatus";

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

     const online = useOnlineStatus()
     if(online === false) 
       return (
          <h1>Looks like you are offline! Please check your internet connection </h1>
       )

     
     
    return movie.length === 0 ? (<LoaderComp />) : (

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