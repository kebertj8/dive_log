import React, { useState, useEffect } from 'react'
import DiveLog from './DiveLog'
import DiverTile from './DiverTile'

const DiverContainer = props => {
  let userId = props.match.params.id 
  const [user, setUser] = useState({
    name: "",
    address: "",
    gender: "",
    diving_since: ""
  })
  
  useEffect(() => {
    fetch(`/api/v1/users/${userId}`)
    .then((response)=> {
      if(response.ok){
        return response
      } else{
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage)
        throw(error)
      }
    })
    .then(response => response.json())
    .then(body => {
      debugger
      setDiver({
        name: body.name,
        address: body.address,
        gender: body.gender,
        diving_since: body.diving_since
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])  

// const diverInfo = users.map(dive => {
//     return (
//       <DiverTile
//         key={dive.id}
//         name={dive.name}
//         address={dive.address}
//         gender={dive.gender}
//         diving_since={dive.diving_since}
//       />
//     )
//   })

//       <ul>
//         {diverInfo}
//       </ul>
  
  return(
    <div>
      <h1>Diver of the Day!</h1>
    </div>

    )
  }
export default DiverContainer