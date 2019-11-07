import React, { useState, useEffect } from 'react'

const DiverContainer = props => {
  const [diver, setDiver] =useState({
    name: "",
    address: "",
    gender: "",
    diving_since: ""
  })
  
  let diverId = props.match.params.id 

  useEffect(() => {fetch(`/api/v1/divers/${diverId}`, {
    credentials: 'same-origin',
    })
    .then((response) => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage)
        throw(error)
      }
    })
    .then(response => response.json())
    .then(body => {
      setUser(body)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])
  
  return(
    <h1>Testing</h1>
  )
  }
export default DiverContainer  