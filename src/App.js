
import React, { Component } from 'react'
import Map from './components/Map'
import Restaurants from './components/Restaurants'
import locationData from './data/location.json'
import './App.css'
import GoogleMapReact from 'google-map-react'
import SearchBar from './components/SearchBar'
import axios from 'axios'

class App extends Component {

state = {
	markers: [],
	locations: [],
	foursquareInfo:[]
}

componentDidMount() {
	this.renderMap()
	this.renderFoursquare()
}

initMap=()=> {
   let map= new window.google.maps.Map(document.getElementById('map'), {
   center: {lat: 44.519159, lng: -88.019826}, 
   zoom: 12});  
  }	


renderMap=()=>{
	loadMap("https://maps.googleapis.com/maps/api/js?v=3&key=AIzaSyC5-0uFUUOwNG8qyC82A6zUbfD619EbDUw&callback=initMap")
	window.initMap = this.initMap
}

/*createMarkers = () => {
    let markers= new window.google.maps.Marker({
     position: {lat: window.location.location.lat, lng: window.location.location.lng}
    }); 
    this.state.markers.push(this.markers);
  }*/
  renderFoursquare = (query) => {
	const endpoint= "https://api.foursquare.com/v2/venues/explore?"
	let foursquareInfo= { // missing access credentials
		client_id: "5GRVKAT5C2F1EALKLBKBQQLJPSL2CKLUQXSQI3O3LHANQNK5",
		client_secret: "GETW1UOWQITCGPGNCIDQTA3QSZ2PD1YCD4HFT3BCFE4MXXO4",
		near: "Green Bay",
		query: "coffee",
		limit: 10,
		radius: 16093.4,
		v: "20181106"
	}
	axios.get(endpoint + new URLSearchParams(foursquareInfo))
	.then(res => {
		// this.setState({foursquareInfo: res.data});
		 console.log(res)
	}).catch(error=> {
		console.log("Error:" +error)
	}) 
}

  render() {
    return (
    	<main>
    	<h1>Coffee in Green Bay, WI</h1>
    	 <div id="search-local">
      <SearchBar /> </div>
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
