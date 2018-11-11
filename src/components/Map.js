import React, { Component } from 'react'

class Map extends Component {
  
componentDidMount() {
  this.renderMap()
}

initMap=()=> {
   let map= new window.google.maps.Map(document.getElementById('map'), {
   center: {lat: 44.519159, lng: -88.019826}, 
   zoom: 12
	});  
   /*this.state.foursquareData.map(createMarker => {
 	 let markers= new window.google.maps.Marker({
     position: {lat:this.state.foursquareData.venue.location.lat, lng:this.state.foursquareData.venue.location.lng},
     map:map
     //infowindow added here
    }); */
 	var createMarkers = () => {
    let markers= new window.google.maps.Marker({
     position: {lat:this.state.foursquareData.venue.location.lat, lng:this.state.foursquareData.venue.location.lng}
    })
    //this.state.markers.push(this.markers);
  }
}

renderMap=()=>{
	loadMap("https://maps.googleapis.com/maps/api/js?v=3&key=AIzaSyC5-0uFUUOwNG8qyC82A6zUbfD619EbDUw&callback=initMap")
	window.initMap = this.initMap
}
render () {

return (
<div>
 <div id="map"></div> 
 
  
</div>
	)
		}
}

function loadMap(url) { //help from Yahya Elharony
	let index = window.document.getElementsByTagName("script")[0]
	let script= window.document.createElement("script")
	script.src = url
	//script.async = true script.defer= true
	index.parentNode.insertBefore(script,index)
}

export default Map;