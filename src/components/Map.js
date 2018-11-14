/* global google */
import React, { Component } from 'react'

class Map extends Component {

state = {
	map:null,
	infowindow:null,
	filteredMarkers:[],
  markers: []
}

componentWillMount() {
  this.renderMap()
}
componentWillReceiveProps = props => {
    const { foursquareData } = props;
    const filteredMarkers = [];
    foursquareData.forEach(location => {
      const marker = new window.google.maps.Marker({
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
      let infowindow = new window.google.maps.InfoWindow({
     content: 'Visit ' +location.venue.name +' at '+ location.venue.location.address + ' today!',
      
   });

      marker.addListener('click', function(){
        populateInfoWindow(this, infowindow);
        marker.setIcon('https://www.google.com/mapfiles/marker_yellow.png');
      });
      filteredMarkers.push(marker);
    });
    this.setState(
      {
        filteredMarkers
      },
      () => console.log(this.state)
    );
  }

initMap=()=> {
   let map= new window.google.maps.Map(document.getElementById('map'), {
   center: {lat: 44.519159, lng: -88.019826}, 
   zoom: 12
	});  
    this.setState({map});
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

function populateInfoWindow (marker, infowindow) {
  if (infowindow.marker !== marker && infowindow.open !== 1){
    infowindow.marker = marker;
    infowindow.open(infowindow, marker);
    infowindow.addListener('closeclick', function(){
      infowindow.marker = null;
      marker.setIcon('https://www.google.com/mapfiles/marker_green.png');
    });
  }
}

export default Map;