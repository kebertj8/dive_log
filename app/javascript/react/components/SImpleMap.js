import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

const SimpleMap = props =>  {

    return (
      <div style={{ height: '75vh', width: '100vw' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDdks56oE7iAupOJgSXlZxbQKRMuvurYMw" }}
          defaultCenter={{
            lat:42.40,
            lng:-71.38
          }}
          defaultZoom={ 10 }
        >

        </GoogleMapReact>
      </div>
    );
  }


export default SimpleMap
