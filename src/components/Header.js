import React,{useState} from 'react';
import { fakeimage } from '../utility/Fakemovie';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Category from './Category';

const Header = () => {

  const films = ['comedy','Action','Thriller']
   
    const[filmlist,setFilmlist] = useState([]);

    const moviedata = () => {

        setFilmlist(films);
        
    }

    const cartItems = useSelector((store) => store.cart.items)
    console.log(cartItems,"cart");

    return (
        <div className='header'>

            <div className='logo'>

              <img src={fakeimage} className='logo-img' alt="img"/>

            </div>

            <div className='nav-items'>

                <ul>

                  <Link to="/" ><li>Home</li></Link>   
                  <Link to="/Tvshow"><li>Tv Shows</li></Link>   
                  <Link to="/Movies"><li>Movies</li></Link>   
                  <Link to="/cart"><li>Cart - ({cartItems.length} items)</li></Link>
                  <Link to="/login">Login</Link>
                 
                {/*  <Link to="/register"><li>Register</li></Link> */}
                {
                  filmlist.map((data) => {
                    return (
                      <div>
                        <h1> {data} </h1>  
                      </div>
                    )
                  })
                }

              <button onClick={()=>setFilmlist(moviedata())}><Link to="/category"><li>Category</li></Link></button>    
                  
                    
                 {/*<button onClick={()=> login === 'Login' ? setLogin('Logout') : setLogin('Login')}>{login}</button>   */}
                </ul>
                
            </div>

             
            

        </div>
    )
}

export default Header;