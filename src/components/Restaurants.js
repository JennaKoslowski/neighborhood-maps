import React, {Component} from 'react'
//import axios from 'axios'

class Restaurants extends Component{

 render() {
    return (
    	<div>
    	{this.state.foursquareData.map(
        locations=><li>{locations.name}</li>)}
       </div>
    );
  }
}

export default Restaurants;