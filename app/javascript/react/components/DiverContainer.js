import React, { useState, useEffect } from 'react'
import DiveLog from './DiveLog'
import DiverTile from './DiverTile'

const DiverContainer = props => {
  let userId = props.match.params.id 
  const [user, setUser] =useState({
    name: "",
    address: "",
    gender: "",
    diving_since: ""
  })
  
  useEffect(() => {
    fetch(`/api/v1/users/${userId}`)
    .then(response => {
      return response.json()

    })

    .then(response => {
      setDiver({
        name: response.name,
        address: response.address,
        gender: response.gender,
        diving_since: response.diving_since
      })
    })
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