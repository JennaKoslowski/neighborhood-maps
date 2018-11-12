import React, {Component} from 'react'
//import axios from 'axios'

class Restaurants extends Component{


/*createMarkers = () => {
    let markers= new window.google.maps.Marker({
     position: {lat: window.location.location.lat, lng: window.location.location.lng}
    }); 
    this.state.markers.push(this.markers);
  }*/
 

 render() {
    return (
    	<p>
    	{this.state.locations.map(locations=><li>{locations.name}</li>)
    	}
      
       </p>
    );
  }
}

export default Restaurants;