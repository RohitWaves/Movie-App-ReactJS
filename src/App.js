import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
//import Body from './components/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Tvshow from './components/Tvshow';
import Movie from './components/Movie';
import { Provider } from 'react-redux';
import Appstore from './utility/Appstore';
import Cart from './components/Cart';
import Protected from './components/Protected';
import AuthGuard from './Guard/Authguard';
import Home from './components/Home';
import Login from './components/Login';
import Authguard from './Guard/Authguard';
import Category from './components/Category';
//import Register from './components/Register';
function App() {

  const [isLoggedIn, setisLoggedIn] = useState(null);

  const logIn = () => {
    setisLoggedIn(true);
  };
   
  const logout = () => {
    setisLoggedIn(false);
  };

  return (
    <div>
       <Provider store={Appstore}>

         <BrowserRouter>

           <Header />

           {isLoggedIn ? (
       <button onClick={logout}>Logout</button>
     ) : (
       <button onClick={logIn}>Login</button>
     )}
      
           <Routes>
            
            {/*Authguard */}
           
           {/* <Route path="/cart" element={<AuthGuard><Cart /></AuthGuard>} /> */}
           <Route path='/'
            element={
           <AuthGuard isLoggedIn={isLoggedIn}>
             <Home />
           </AuthGuard>
         }
       />
          <Route path='/cart'
            element={
           <AuthGuard isLoggedIn={isLoggedIn}>
             <Cart />
           </AuthGuard>
         }
       />
        
            
             <Route path="/login" element={<Login />} /> 
           
            {/* <Route path="/" element={<Home />} /> */}
             <Route path="/Tvshow" element={<Tvshow />} />
             <Route path="/Movies" element={<Movie />} />
             <Route path="/category" element={<Category />} />
           {/*  <Route path="/cart" element={<Cart />} /> */}
            
           {/*  <Route path="/register" element={<Protected Component={Register}/>} /> */}
             
           </Routes>
         </BrowserRouter>
         </Provider>
      
    </div>
  );
}

export default App;
