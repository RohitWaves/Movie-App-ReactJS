import React,{useState} from 'react';
import { fakeimage } from '../utility/Fakemovie';
const Header = () => {
    const[login,setLogin] = useState('Login')
    return (
        <div className='header'>

            <div className='logo'>
              <img src={fakeimage} className='logo-img' />
            </div>

            <div className='nav-items'>
                <ul>
                     <li>Home</li>
                     <li>Tv Shows</li>
                     <li>Movies</li>
                     <li>Documentary</li>
                     <button onClick={()=> login === 'Login' ? setLogin('Logout') : setLogin('Login')}>{login}</button>
                </ul>
                
            </div>

             
            

        </div>
    )
}

export default Header;