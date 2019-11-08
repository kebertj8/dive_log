import React, { useState, useEffect } from 'react'
import DiveLog from './DiveLog'
import { userInfo } from 'os'

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

  return(
    <div>
      <h1>Diver Of the Day!</h1>
      <ul>
        <li>{diver.name}</li>
        <li>{diver.address}</li>
        <li>{diver.gender}</li>
        <li>{diver.diving_since}</li>
      </ul>
    </div>

    )
  }
export default DiverContainer