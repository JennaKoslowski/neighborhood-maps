
import React, { Component } from 'react';
import Map from './components/Map'

import './App.css';


class App extends Component {

componentDidMount() {
	this.renderMap()

}

initMap=()=> {
   let map= new window.google.maps.Map(document.getElementById('map'), {
   center: {lat: 44.519159, lng: -88.019826}, 
   zoom: 12})  
  }	


renderMap=()=>{
	loadMap("https://maps.googleapis.com/maps/api/js?v=3&key=AIzaSyC5-0uFUUOwNG8qyC82A6zUbfD619EbDUw&callback=initMap")
	window.initMap = this.initMap
}

//foursquare= ()=>{
//	let foursquareAPI="https://api.foursquare.com/v2/venues/VENUE_ID"
//	let foursquareInfo= {
//		near: Green Bay
//		selection: coffee
//		limit: 10
//		radius: 16093.4 //10 miles	
//	} 
//}


  render() {
    return (
    	<main>
       <Map /> 
      
       </main>
    );
  }
}

function loadMap(url) { //help from Yahya Elharony
	let index = window.document.getElementsByTagName("script")[0]
	let script= window.document.createElement("script")
	script.src = url
	//script.async = true script.defer= true
	index.parentNode.insertBefore(script,index)
}
export default App;
