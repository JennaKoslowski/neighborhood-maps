import React, {Component} from 'react'

class RestaurantListing extends Component{

 render() {
 	console.log(this.props.foursquareData)
    return (
    	<div className="restaurant-item">
        {this.venue.name}
       </div>
    );
  }
}

export default RestaurantListing;