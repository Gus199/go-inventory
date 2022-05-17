import React from 'react'
import {Link} from 'react-router-dom'
import {FaTimes} from 'react-icons/fa'
import {useContext} from 'react'
import DeviceContext from '../context/DeviceContext'

function DeviceItem({device,}) {
  const {deleteDevice} =useContext(DeviceContext)

  

  return (
    
    <div className="device-list">
        <button   onClick={() => deleteDevice(device.id)} className='close'>
           <FaTimes  color='red'/>
       </button>
       <div className="blog-preview" key={device.id}>
       
          <Link to={`/devices/${device.id}`}>
         
          <h2>{device.name}</h2>
          </Link>
          <h3>{device.Description}</h3>
          <p>Written by : {" "}{device.Category}</p>
      
       
          </div>
        </div>
  )
}

export default DeviceItem