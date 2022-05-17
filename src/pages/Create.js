import  {useState} from 'react'
import { useNavigate } from 'react-router-dom'



function Create() {
  const [name, setName] = useState('')
  const [Description, setDescription] = useState('')
  const [Category, setCategory] = useState('Macbook')
  const [isLoading, setIsLoading] = useState(false);
const navigate = useNavigate()
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const device = {name, Description, Category};
    setIsLoading(true)
    
    fetch('http://localhost:8000/devices', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(device)
    }).then(() => {
      console.log('new blog added')
      setIsLoading(false)
    })
    navigate("/")

  }
  return (
    <div className='create'> 
    <h2>Add a New Device</h2>
    <form onSubmit={handleSubmit}>
      <label>Device Name</label>
      <input
      type="text"
      required
      value={name}
      onChange={(e) => setName(e.target.value)}
       />
       <label>Device Description:</label>
      <textarea 
       required
       value={Description}
       onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <label>Device Category:</label>
      <select
      value={Category}
      onChange={(e) => setCategory(e.target.value)}  
      >
        
        <option value="Macbook">Macbook</option>
        <option value="Iphone">Iphone</option>
        <option value="Ipad">Ipad</option>
        
      </select>
      {!isLoading && < button>Add Device</button>}
      {isLoading && < button disabled>Add Device...</button>}
    
    </form>
    </div>
  )
}

export default Create