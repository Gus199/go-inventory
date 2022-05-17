import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Create from './pages/Create';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import DeviceDetails from './components/DeviceDetails';
import NotFound from './pages/404';



function App() {


  return (
    <Router>
      <div className="App">
      <Navbar />
    <div className='content'>

      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/create' element={<Create />}/>
      <Route path='/about' element={<About/>} />
      <Route path='/devices/:id' element={<DeviceDetails/>} />
    
      <Route path='*' element={<NotFound/>} />
      </Routes>
    </div>
    </div>
    </Router>
    
  );
}

export default App;
