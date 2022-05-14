import React from "react";

function DevicesList({ devices, title, handleDelete }) {
   
  return (
    <div className="device-list">
      {devices.map((device) => (
        <div className="blog-preview" key={device.id}>
          <h1>{title}</h1>
          <h2>{device.title}</h2>
          <p>Written by : {" "}{device.author}</p>
         
        </div>
      ))}
    </div>
  );
}

export default DevicesList;
