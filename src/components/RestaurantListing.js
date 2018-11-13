import React, {Component} from 'react'

const RestaurantListing = ({venue}) => {


    return (
    	<div className="restaurant-item">
        {venue.venue.name}
       </div>
    );
}

export default RestaurantListing;