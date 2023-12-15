import { puppyList } from './data.js'
import './App.css'
import { useState } from 'react'

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [singlePupId, setSinglePupId] = useState('null')
  
  const handleClick = () =>{
    {()=>{console.log("puppy id: ", puppy.id)}}
  }
  
  
  console.log('puppy list:', puppies)
  return (
    <>
      <div className='App'>
        {
          puppies.map((puppy) => {
            return <p onClick={()=>{handleClick}} key={puppy.id}>{puppy.name}</p>
          })
        }
      </div>
    </>
  )
}

export default App
