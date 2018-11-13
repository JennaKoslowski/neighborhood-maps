import React, {Component} from 'react'

class RestaurantListing extends Component{

 render() {
    return (
    	<div class="restaurant-item">
        {this.props.foursquareData.venue.name}
       </div>
    );
  }
}

export default RestaurantListing;