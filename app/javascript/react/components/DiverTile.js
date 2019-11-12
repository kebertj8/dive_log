import React from 'react'

const DiverTile= props => {
  return (
    <div>
    <p>{props.name}</p>
    <p>{props.address}</p>
    <p>{props.gender}</p>
    <p>{props.diving_since}</p>
    </div>
  )
}

export default DiverTile