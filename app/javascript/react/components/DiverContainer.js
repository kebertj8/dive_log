import React, { useState, useEffect } from 'react'
import DiveLog from './DiveLog'
import DiverTile from './DiverTile'

const DiverContainer = props => {
  let diverId = props.match.params.id 
  const [diver, setDiver] =useState({
    name: "",
    address: "",
    gender: "",
    diving_since: ""
  })
  
  useEffect(() => {
    fetch(`/api/v1/users/${diverId}`)
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

const diverInfo = diver.map(dive => {
    return (
      <DiverTile
        key={dive.id}
        name={dive.name}
        address={dive.address}
        gender={dive.gender}
        diving_since={dive.diving_since}
      />
    )
  })

  return(
    <div>
      <h1>Diver Of the Day!</h1>
      <ul>
        {diverInfo}
      </ul>
    </div>

    )
  }
export default DiverContainer