import React, { Component } from 'react'


class Map extends Component {
  createMarkers = () => {
    this.marker= new window.google.maps.Marker({
      position: {lat: window.location.latitude,
        lng: window.location.longitude}
    }); this.state.markers.push(this.marker);
  }
render () {

return (
<div>
 <div id="map"></div> 
 
  
</div>
	)
		}
}
export default Map;