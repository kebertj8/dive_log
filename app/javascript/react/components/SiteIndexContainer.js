import React, { useState, useEffect } from "react"
import DiveTile from "./DiveTile"
import SimpleMap from "./SimpleMap"

const SiteIndexContainer = props => {
  return (
    <div className='site-container'>
      <div className='page-content'>
        <h1>"We dive not to escape life but for life not to escape us"</h1>
            <div className='left-content'>
              <DiveTile/>
            </div>
              <SimpleMap/>
      </div>
    </div>
  )
}

export default SiteIndexContainer
