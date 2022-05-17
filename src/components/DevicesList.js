


import DeviceItem from "./DeviceItem";

 import {useContext} from 'react'
import DeviceContext from "../context/DeviceContext";

function DevicesList() {
   const {devices, isLoading, error} = useContext(DeviceContext)

  
  
  return (<>
    
      {error && <div>{error}</div>} 
       {isLoading && <div>Loading...</div>}
      {devices && devices.map((device) => (
       
        <DeviceItem  key={device.id} device={device} />
      ))}
   
   </>
        
  );
}

export default DevicesList;
