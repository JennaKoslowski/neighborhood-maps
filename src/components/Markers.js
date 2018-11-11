import React, {Component} from 'react'
import App from '../app.js'

class Markers extends Component{

createMarkers = () => {
    let markers= new window.google.maps.Marker({
     position: {lat: , lng: }
    }); 
    this.state.markers.push(this.markers);
  }
 

 render() {
    return (
    	<p>
      
       </p>
    );
  }
}

export default Markers;