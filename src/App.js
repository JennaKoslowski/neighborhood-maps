
import React, { Component } from 'react'
import Map from './components/Map'
import Restaurants from './components/Restaurants'
import locationData from './data/location.json'
import './App.css'
import GoogleMapReact from 'google-map-react'
import SearchBar from './components/SearchBar'

class App extends Component {

state = {
	markers: [],
	locations: [],
}

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

  render() {
    return (
    	<main>
    	<h1>Coffee in Green Bay, WI</h1>
       <div id="map"> 
       <Map role= "application" 
       aria-label = "map" >
     <Restaurants {...this.state}/></Map>
     </div>
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
