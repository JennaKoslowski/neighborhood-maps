import axios from 'axios'
import React, { Component } from 'react';
import Map from './components/Map'

import './App.css';


class App extends Component {

	state= {
		foursquareInfo:[]	}

componentDidMount() {
	this.renderMap()
	this.renderFoursquare()
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

renderFoursquare = () => {
	let foursquareInfo= { // missing access credentials
		client_id: "W3ASN51V10YRM0MLD0NB54OUTTUC2CC3T00BWAD5TY03JDL1",
		client_secret: "GFF43GINHHSVQCHM3AMF2QBKY4CDV2DUZXPIHXGG1GPFM3LB",
		near: "Green Bay",
		selection: "coffee",
		limit: 10,
		radius: 16093.4,
		v:"20180323"
	}
	axios.get('https://api.foursquare.com/v2/venues/VENUE_ID'
		+ new URLSearchParams(this.foursqureInfo))
	.then(res => {
		 this.setState({foursquareInfo});
		 console.log(res)
	}).catch(error=> {
		console.log(error.response)
	}) 
}

  render() {
    return (
    	<main>
       <Map /> 
       console.log({this.foursquareInfo});
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
