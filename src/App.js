import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Create from './Create';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';


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
      </Routes>
    </div>
    </div>
    </Router>
    
  );
}

export default App;
