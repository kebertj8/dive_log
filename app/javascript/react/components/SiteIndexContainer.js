import React, { useState, useEffect } from "react"
import SiteTile from "./SiteTile"
import DiveTile from "./DiveTile"
import SimpleMap from "./SImpleMap"

const SiteIndexContainer = props => {
  return (
    <div className='site-container'>
      <div className='page-content'>
        <h1>"We dive not to escape life but for life not to escape us"</h1>
          <div className='inner-content'>
            <div className='left-content'>
              <DiveTile/>
              <br></br>
              </div>
            <div className='right-content'>
              <SiteTile/>
      <h3>Google Maps API</h3>
          {/* <SimpleMap/> */}
      </div>
    </div>
  </div>
</div>
  )
}

export default SiteIndexContainer
