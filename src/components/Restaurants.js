/*import React, {Component} from 'react'
import locationData from '../data/location.json'
import axios from 'axios'


class Restaurants extends Component{

componentDidMount(){
	this.createMarkers()
}

createMarkers = () => {
 // let url = ""
  axios.get(`https://api.myjson.com/bins/kqq1y`)
  .then(response => {
    console.log(response)
    //this.state.locations.push(this.locations)
    this.setState({locations: response.data});
  }).catch(function(error){
    console.log(error);
  })/*named array:"https://api.myjson.com/bins/sg80u"
    unnamed array: "https://api.myjson.com/bins/kqq1y"
  */
	/*this.state.locations.map(location =>{
    let markers= new window.google.maps.Marker({
     position: {lat: window.locations.lat, lng: window.locations.lng},
     map: this.initMap
    }); 
    this.setState({markers:[this.state.markers, this.markers]});
    console.log(markers)
  })
}

 render() {
    return (
    	<p>
    	{this.state.locations.map(locations=><li>{locations.name}</li>)
    	}
      
       </p>
    );
  }
}*/

//export default Restaurants;