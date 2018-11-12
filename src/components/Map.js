import React, { Component } from 'react'

class Map extends Component {

state = {
	map:null,
	infowindow:null,
	filteredMarkers:[]
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
        animation: window.google.maps.Animation.DROP,
      });
      filteredMarkers.push(marker);
    });
    this.setState(
      {
        filteredMarkers
      },
      () => console.log(this.state)
    );
   // let infowindow = new window.google.maps.InfoWindow({
     // content: {location.venue.location.address}
      //content: {location.venue.name}
    //})
  };

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

export default Map;