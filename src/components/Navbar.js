import {Link}  from 'react-router-dom'


function Navbar() {
  return (
   <nav className='navbar'>
      <Link to='/'> <h1>The Go</h1></Link>
       <div className='links'>
           <Link to='/create'> Create</Link>
           {/* <Link to='/create' > New Device</Link> */}
           <Link to='/about'>About</Link>
       </div>
   </nav>
  )
}

export default Navbar