/* global google */
import React, { Component } from 'react'

class Map extends Component {

state = {
	map:null,
	infowindow:null,
	filteredMarkers:[],
  markers: [],
  activeMarker: null
}

componentWillMount() {
  this.renderMap()
}
componentWillReceiveProps = props => {
    const { foursquareData } = props;
    const filteredMarkers = [];
    foursquareData.forEach(location => {
      const marker = new google.maps.Marker({
        position: new window.google.maps.LatLng(
          location.venue.location.lat,
          location.venue.location.lng
        ),
        map: this.state.map,
        title: location.venue.name,
        infowindow: null,
        animation: window.google.maps.Animation.DROP,
        icon: 'https://www.google.com/mapfiles/marker_green.png'
      });
    marker.addListener('click', ()=>{
        this.populateInfoWindow(marker);
        marker.setIcon('https://www.google.com/mapfiles/marker_yellow.png');
      });
      filteredMarkers.push(marker);
    });
    this.setState(
      {filteredMarkers},
    );
  };

populateInfoWindow = marker => {
         let {infowindow}= this.state;
         let contentStr; 
         this.props.foursquareData.forEach(venue =>{
          if (marker.title === venue.venue.name) {
           contentStr = `Visit ${venue.venue.name} at ${
          venue.venue.location.address
        } today!`;
      }
    });
    infowindow.setContent(contentStr);
    google.maps.event.addListener(this.state.map, "click", () => {
      this.state.infoWindow.close();
    });

  if (infowindow.marker !== marker && infowindow.open !== 1){
    infowindow.marker = marker;
    infowindow.open(infowindow, marker);
  }
}

initMap=()=> {
   let map= new window.google.maps.Map(document.getElementById('map'), {
   center: {lat: 44.519159, lng: -88.019826}, 
   zoom: 12
	}); 
    let infowindow = new window.google.maps.InfoWindow({}); 
    this.setState({map, infowindow});
  };

renderMap=()=>{
	loadMap("https://maps.googleapis.com/maps/api/js?v=3&key=AIzaSyC5-0uFUUOwNG8qyC82A6zUbfD619EbDUw&callback=initMap")
	window.initMap = this.initMap
};
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