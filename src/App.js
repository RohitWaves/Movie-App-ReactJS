import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div>
       <Header />
       <BrowserRouter>
          <Routes>
             <Route path="/" element={<Body />} ></Route>
          </Routes>
       </BrowserRouter>
      
    </div>
  );
}

export default App;
