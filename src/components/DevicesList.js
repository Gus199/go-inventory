import React from "react";

import DeviceItem from "./DeviceItem";

import useFetch from "./useFetch";

function DevicesList() {
  const {data:devices, isLoading, error} =useFetch('http://localhost:8000/devices')
  return (
    <div className="device-list">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {devices && devices.map((device) => (
       
        <DeviceItem  key={device.id} device={device} />
      ))}
    </div>
    
        
  );
}

export default DevicesList;
