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
    return <Redirect to= '/divers/${shouldRedirect}'/>
  } 

  const handleChange = event => {
    setNewLog({
      ...newLog,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSubmit = () => {
    event.preventDefault()
    postNewLog(newLog)
  }

  return (
  <div>
    <form onSubmit={handleSubmit}>
      <label>
        Style:
        <input type="text" name="style"
          onChange={handleChange}
          value={newLog.name}/>
      </label>

      <input type="submit" value="Submit"/>
      <br></br>
    </form>
  </div>
  )
}

export default DiveLog
