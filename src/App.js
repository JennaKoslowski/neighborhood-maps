
import React, { Component } from 'react'
import Map from './components/Map'
import './location.json'
import './App.css'
import axios from 'axios'


class App extends Component {

state = {
	markers: [],
	locations: []
}

componentDidMount() {
	this.renderMap()
	this.createMarkers()
}
componetWillMount(){
	axios.get(window.location.json)
.then(response => {
	this.setState({markers: response.data});
}).catch(function(error){
	console.log(error);
})
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

createMarkers = () => {
    let marker= new window.google.maps.Marker({
      position: {lat: window.location.latLong}
    }); this.state.markers.push(this.marker);
  }

  render() {
    return (
    	<main>
    	<h1>Coffee in Green Bay, WI</h1>
       <Map role= "application"
       aria-label = "map" />
      
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
