import React from 'react'
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
function Map() {
    const item = {
        name: "Location 1",
        location: {
          lat: 33.87379226780432, 
          lng: 10.110680417858523,
        },
      };
    
      const mapStyles = {
        height: "350px",
        width: "546px",
      };
    
      const defaultCenter = {
        lat: 33.9430531, 
        lng: 10.0667387,
      };
  return (
    <div>
         <div className="aboutUsElement">
        <LoadScript googleMapsApiKey="AIzaSyC-9HBtGH2Tn5omz6Y4g9B29Jg5EVVx2xE">
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={15}
            center={defaultCenter}
          >
            <Marker key={item.name} position={item.location} />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  )
}

export default Map