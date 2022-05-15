import React from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
import useFetch from './useFetch'

function DeviceDetails() {
   
    const { id } = useParams()
    const {data: device, error, isLoading} = useFetch(`http://localhost:8000/devices/${id}`)
    const navigate = useNavigate()

    const handleClick = () => {
        fetch(`http://localhost:8000/devices/${id}`, {
            method: 'DELETE',
            
        }).then(() => {
         navigate('/')
        })
    }
   
  return (
    <div className='blog-details'>
        {isLoading && <div>Loading...</div>}
        {error && <div>{ error}</div>}
        {device && (
            <article>
                <h2>{device.name}</h2>
                <p>Writen by {device.author}</p>
                <div>{device.body}</div>
                 <button onClick={handleClick}>Delete</button>
                <Link to={`/edit`}> <button >Edit</button></Link> 
            </article>
        )}
    </div>
  )
}

export default DeviceDetails