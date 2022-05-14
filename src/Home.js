
import DevicesList from './DevicesList'
import useFetch from './useFetch'


function Home( ) {
  const {data:devices, isLoading, error} =useFetch('http://localhost:8000/devices')
  
  return (
    <div className='Home'>
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
   {devices && <DevicesList devices ={devices} title='Devices!' />}
   
        
    </div>
  )
}

export default Home