import React from "react";
import {Link} from 'react-router-dom'

function DevicesList({ devices, name }) {
   
  return (
    <div className="device-list">
      {devices.map((device) => (
        <div className="blog-preview" key={device.id}>
          <Link to={`/devices/${device.id}`}>
          <h2>{device.name}</h2>
          <p>Written by : {" "}{device.author}</p>
          </Link>
          <h1>{name}</h1>
          
         
        </div>
      ))}
    </div>
  );
}

export default DevicesList;
