import React from 'react'
import {Link} from 'react-router-dom'

function DeviceItem({device}) {
  return (
    
       
       <div className="blog-preview" key={device.id}>
          <Link to={`/devices/${device.id}`}>
          <h2>{device.name}</h2>
          <h3>{device.Description}</h3>
          <p>Written by : {" "}{device.Category}</p>
          </Link>
       
       
        </div>
  )
}

export default DeviceItem