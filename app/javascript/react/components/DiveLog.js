import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

const DiveLog = props => {

  const [shouldRedirect, setShouldRedirect] =useState(null)
  const [errors, setErrors] = useState({})
  const [newLog, setNewLog] = useState({
    style: "",
    number: "",
    depth: "",
    visibility: "",
    longitude: "",
    latitude: "",
    dive_buddy: "",
    site: ""
  })
  
    const validForSubmission = () => {
    let submitErrors = {}
    const requiredFields = ["style", "number", "depth", "visibility", "longitude", "latitude", "dive_buddy", "site"]
    requiredFields.forEach(field => {
      if (newLog[field].trim() === "") {
        submitErrors = {
          ...setErrors,
          [field]: "can't be blank"
        }
      }
    })

    setErrors(submitErrors)
    return_.isEmpty(submitErrors)
  }

    const postNewLog = (newLog) => {
    event.preventDefault()
    if (validForSubmission()) {
      fetch("api/v1/users", {
        credentials: "same-origin",
        method: "POST",
        body: JSON.stringify(setNewLog),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
      .then(response => {
        if (response.ok) {
          return response
        } else {
          const errorMessage = `${response.status} (${response.statusText})`
          const error = new Error(errorMessage)
          throw error
        }
      })
      .then(response => response.json())
      .then(body => {
        if (body.id) {
          setShouldRedirect(body.id)
        } else {
          setErrors(body)
        }
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
    }
  }

  if (shouldRedirect) {
    return <Redirect to="/divers"/>
  } 

  const formSubmit = (event) => {
    event.preventDefault
    let divePayLoad = newLog
    props.postNewLog(divePayLoad)
  }

    const addNewLog = (event) => {
      event.preventDefault()
      setNewLog({
        ...newLog,
        [event.currentTarget.id]: event.currentTarget.value
      })
    }
    
  return (
  <div>
    <form onSubmit={formSubmit}>
      
      <label htmlFor="style">
        Style:
        <input type="text" id="style" name="style" placeholder="style"/>
      </label>

      <label>
        Number:
        <input type="text" id="number" name="number" placeholder="Number"/>
      </label>

      <label>
        Depth:
        <input type="text" id="depth" name="depth" placeholder="Depth"/>
      </label>

      <label>
        Visibility:
        <input type="text" id="visibility" name="visibility" placeholder="Visibility"/>
      </label>

      <label>
        Longitude:
        <input type="text" id="longitude" name="longitude" placeholder="Longitude"/>
      </label>

      <label>
        Latitude:
        <input type="text" id="latitude" name="latitude" placeholder="Latitude"/>
      </label>

      <label>
        DiveBuddy:
        <input type="text" id="diveBuddy" name="DiveBuddy" placeholder="DiveBuddy"/>
      </label>

      <label>
        Site:
        <input type="text" id="site" name="site" placeholder="Site"/>
      </label>

      <input type="submit" value="Submit"/>
      <br></br>
    </form>
  </div>
  )
}

export default DiveLog
