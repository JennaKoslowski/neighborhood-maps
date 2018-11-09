import React, {Component} from 'react'
import locationData from '../data/location.json'
import axios from 'axios'


class Restaurants extends Component{

componentDidMount(){
	this.createMarkers()
}
//still works
	


createMarkers = () => {
  let url = "https://api.myjson.com/bins/sg80u"
  axios.get(url)
  .then(response => {
    console.log(response)
    //this.state.locations.push(this.locations)
    this.setState({locations: response.data});
  }).catch(function(error){
    console.log(error);
  })/*"https://api.myjson.com/bins/sg80u"*/
	this.state.locations.map(location =>{
    let markers= new window.google.maps.Marker({
     position: {lat: window.locations.lat, lng: window.locations.lng},
     map: this.initMap
    }); 
    this.state.markers.push(this.markers);
    console.log(markers)
  })
}

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