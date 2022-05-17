import { createContext, useState, useEffect } from 'react'


const DeviceContext = createContext()

export const DeviceProvider = ({ children }) => {
  
  const [isLoading, setIsLoading] = useState(true)
  const [devices, setDevices] = useState([])
  // const [feedbackEdit, setFeedbackEdit] = useState({
  //   item: {},
  //   edit: false,
  // })

 

  // Fetch feedback
  const fetchDevice = async () => {
    const response = await fetch('http://localhost:8000/devices')
    const data = await response.json()

    setDevices(data)
    setIsLoading(false)
    
  }
 
  useEffect(() => {
   
      fetchDevice()
  }, [])
  
// Delete feedback
const deleteDevice = async (id) => {
  if (window.confirm('Are you sure you want to delete?')) {
    await fetch(`http://localhost:8000/devices/${id}`, { method: 'DELETE' })

    setDevices(devices.filter((item) => item.id !== id))
  }
}

//  // Add device
//  const addDevice = async (newDevice) => {
//   const response = await fetch('http://localhost:8000/devices', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(newDevice),
//   })

//   const data = await response.json()

//   setDevices([data, ...devices])
// }
 
  

  return (
    <DeviceContext.Provider
      value={{
        devices,
        isLoading,
        // addDevice,
        deleteDevice
       
      }}
    >
      {children}
    </DeviceContext.Provider>
  )
}

export default DeviceContext
