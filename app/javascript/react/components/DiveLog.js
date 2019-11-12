import React, { useState, useEffect } from 'react'

const DiveLog = props => {

  const [shouldRedirect, setShouldRedirect] =useState(false)
  const [errors, setErrors] = useState({})
  const [newLog, setNewLog] = useState({
    style: "",
    number: "",
    depth: "",
    visibility: "",
    longitude: "",
    latitude: "",
    dive_buddy: "",
    site: "",
    userId: props.userId 
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

    const postNewLog = (name) => {
    event.preventDefault()
    if (validForSubmission()) {
      fetch("api/v1/users", {
        credentials: "same-origin",
        method: "POST",
        body: JSON.stringify(newLog),
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
          setShouldRedirect(true)
        } else {
          setErrors(body)
        }
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
    }
  }

  // handleSubmit(event) => {
  //   alert('A name was submitted: ' + this.state.value);
  //   event.preventDefault();
  // }

  // const handleSubmit = () => {
  //   event.preventDefault()
  //   props.submitNewQuestion(newQuestion)
  // }

  return (
    <form onSubmit={this.handleSubmit}>
      <label>
        Style:
        <input type="text" name="style"/>
      </label>

      <label>
        Number:
        <input type="text" name="number"/>
      </label>

      <label>
        Depth:
        <input type="text" name="depth"/>
      </label>

      <label>
        Visibility:
        <input type="text" name="visibility"/>
      </label>

      <label>
        Longitude:
        <input type="text" name="longitude"/>
      </label>

      <label>
        Latitude:
        <input type="text" name="latitude"/>
      </label>

      <label>
        DiveBuddy:
        <input type="text" name="DiveBuddy"/>
      </label>

      <label>
        Site:
        <input type="text" name="site"/>
      </label>

      <input type="submit" value="Submit"/>
      <br></br>
    </form>
  )
}

export default DiveLog
