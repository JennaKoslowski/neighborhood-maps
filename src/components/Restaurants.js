import React, {Component} from 'react'
import locationData from '../data/location.json'
import axios from 'axios'


class Restaurants extends Component{

state = {
	markers: [],
	locations: []
}

componentDidMount(){
	this.createMarkers()
}
componetWillMount(){//still works
	axios.get("https://api.myjson.com/bins/sg80u")
	.then(response => {
		this.setState({markers: response.data});
	}).catch(function(error){
		console.log(error);
	})}/*"https://api.myjson.com/bins/sg80u"*/


createMarkers = () => {
	this.state.locations.map(location =>{
    let markers= new window.google.maps.Marker({
     position: {lat: window.location.location.lat, lng: window.location.location.lng},
     
    }); 
    this.state.markers.push(this.markers);
  })}

 render() {
    return (
    	<div>
    	{/*{locationData.map((locationDetail, index)=>{
    		return <h1>{locationDetail.locations.name}</h1>
    	})}    */}
      
       </div>
    );
  }
}

export default Restaurants;