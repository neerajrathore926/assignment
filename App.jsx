import './App.css'
import React, {useState, useEffect} from 'react'
import axios from "axios"

function App() {
  const[post,setpost]=useState([])

  function deleteItem(delID){
    console.log(delID)
    const updatedList = post.filter(cpost=>{
      console.log(cpost.id==delID)
      return (cpost.id != delID)
  } )
  console.log(updatedList)
  setpost(updatedList)
  }
  
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
        console.log(res)
        setpost(res.data)
    }).catch(err=>{
        console.log(err)
    })
},[])
 

  return (
    <>
     <div className=''>
      <h1 className='headiing'>Fetching Data Through API</h1>
      <div className="content">
      {
        post.map(postElem=>{
          return(
            <div className="card" key={postElem.id}>
        <div className="card-content">
          <h1>{postElem.id}</h1>
          <h2>{postElem.title}</h2>
          <p>{postElem.body}</p>
          <button onClick={()=>{deleteItem(`${postElem.id}`)}}>Delete</button>
        </div>
      </div>  
          )
        })  
      }
     </div>
     </div>
    </>
  )
}

export default App
