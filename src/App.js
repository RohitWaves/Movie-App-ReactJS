import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Tvshow from './components/Tvshow';
import Movie from './components/Movie';
function App() {
  return (
    <div>
        <BrowserRouter>
          <Header />
       
           <Routes>
             <Route path="/" element={<Body />} />
             <Route path="/Tvshow" element={<Tvshow />} />
             <Route path="/Movies" element={<Movie />} />
            
           </Routes>
         </BrowserRouter>
       
      
    </div>
  );
}

export default App;
