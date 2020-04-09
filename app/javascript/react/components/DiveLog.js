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
      
      <label>
        Style:
        <input type="text" name="style"
          onChange={addNewLog}
          value={newLog.name}/>
      </label>

      <label>
        Number:
        <input type="text" name="number"
          onChange={addNewLog}
          value={newLog.name}/>
      </label>

            <label>
        Depth:
        <input type="text" name="depth"
          onChange={addNewLog}
          value={newLog.name}/>
      </label>

      <label>
        Visibility:
        <input type="text" name="visibility"
          onChange={addNewLog}
          value={newLog.name}/>
      </label>

      <label>
        Longitude:
        <input type="text" name="longitude"
          onChange={addNewLog}
          value={newLog.name}/>
      </label>

      <label>
        Latitude:
        <input type="text" name="latitude"
          onChange={addNewLog}
          value={newLog.name}/>
      </label>

      <label>
        DiveBuddy:
        <input type="text" name="DiveBuddy"
          onChange={addNewLog}
          value={newLog.name}/>
      </label>

      <label>
        Site:
        <input type="text" name="site"
          onChange={addNewLog}
          value={newLog.name}/>
      </label>

      <input type="submit" value="Submit"/>
      <br></br>
    </form>
  </div>
  )
}

export default DiveLog
