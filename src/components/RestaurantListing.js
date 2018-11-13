import React, {Component} from 'react'

class RestaurantListing extends Component{

 render() {
 	console.log(this.props.foursquareData)
    return (
    	<div className="restaurant-item">
        {this.props.foursquareData.venue.name}
       </div>
    );
  }
}

export default RestaurantListing;