import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Create from './Create';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import DeviceDetails from './DeviceDetails';
import NotFound from './404';
import Update from './Update';


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
      <Route path='/edit/:id' element={<Update/>} />
      <Route path='*' element={<NotFound/>} />
      </Routes>
    </div>
    </div>
    </Router>
    
  );
}

export default App;
