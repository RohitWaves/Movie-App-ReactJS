import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Tvshow from './components/Tvshow';
import Movie from './components/Movie';
import { Provider } from 'react-redux';
import Appstore from './utility/Appstore';
import Cart from './components/Cart';
function App() {
  return (
    <div>
       <Provider store={Appstore}>
        <BrowserRouter>
          <Header />
       
           <Routes>
             <Route path="/" element={<Body />} />
             <Route path="/Tvshow" element={<Tvshow />} />
             <Route path="/Movies" element={<Movie />} />
             <Route path="/cart" element={<Cart />} />
            
           </Routes>
         </BrowserRouter>
         </Provider>
      
    </div>
  );
}

export default App;
