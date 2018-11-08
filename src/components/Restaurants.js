import React, {Component} from 'react'
import locationData from '../data/location.json'

class Restaurants extends Component{

 render() {
    return (
    	<div>
    	{locationData.map((locationDetail, index)=>{
    		return<h1>{locationDetail.locations.name}</h1>
    	})}
      
       </div>
    );
  }
}

export default Restaurants;