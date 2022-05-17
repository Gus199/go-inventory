import Navbar from './components/Navbar';

import About from './pages/About';
import Create from './pages/Create';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import DeviceDetails from './components/DeviceDetails';
import NotFound from './pages/404';
import { DeviceProvider } from './context/DeviceContext'
import DevicesList from './components/DevicesList';



function App() {


  return (
    <DeviceProvider>
    <Router>
      <div className="App">
      <Navbar />
    <div className='content'>

      <Routes>
      <Route
              path='/'
              element={
                <>
                  
                  <DevicesList  />
                </>
              }
            ></Route>
      {/* //<Route path='/' element={<Home />}/> */}
      <Route path='/create' element={<Create />}/>
      <Route path='/about' element={<About/>} />
      <Route path='/devices/:id' element={<DeviceDetails/>} />
    
      <Route path='*' element={<NotFound/>} />
      </Routes>
    </div>
    </div>
    </Router>
    </DeviceProvider>
    
  );
}

export default App;
