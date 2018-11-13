import React, {Component} from 'react'
import RestaurantListing from './RestaurantListing'
//import axios from 'axios'

class Restaurants extends Component{

 render() {
 	return (
 	{this.props.foursquareData.map((venue) => { 
 		return (
 			<div class="restaurant-item">
 	        venue.name
 	       </div>
 	       );
 		} )
 	} )
} }
export default Restaurants;