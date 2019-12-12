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
      setDiver({
        name: body.name,
        address: body.address,
        gender: body.gender,
        diving_since: body.diving_since
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])  

// let diverInfo = users.map(user => {
//     return (
//       <DiverTile
//         key={user.id}
//         id={user.id}
//         name={user.name}
//         address={user.address}
//         gender={user.gender}
//         diving_since={user.diving_since}
//       />
//     )
//   })
//   {diverInfo}


return(
  <div>
      <h1>Diver of the Day!</h1>
        <DiverTile
        key={user.id}
        id={user.id}
        name={user.name}
        address={user.address}
        gender={user.gender}
        diving_since={user.diving_since}
      />
    </div>
    )
  }
export default DiverContainer