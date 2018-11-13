import React, {Component} from 'react'
import RestaurantListing from './RestaurantListing'
//import axios from 'axios'

class Restaurants extends Component{

 render() {
 	return (
 	{this.props.foursquareData.map((venue) => { 
 		return (
 			<div class="restaurant-item">
 	        <h3>venue.name</h3>
 	       </div>
 	       );
 		} )
 	} )
} }
export default Restaurants;