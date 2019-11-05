import React from 'react'

const DiveLog = props => {
  return (
    <form>
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