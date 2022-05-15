import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {

  return (
    <div className='not-found'>
        <h1>Sory</h1>
        <h2>That page cannot be found</h2>
        <Link to='/'> {'<'} Back to the Homepage...</Link>
    </div>
  )
}

export default NotFound