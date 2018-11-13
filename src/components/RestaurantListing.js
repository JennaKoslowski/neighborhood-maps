import React, {Component} from 'react'

const RestaurantListing = ({venue}) => {


    return (
    	<div className="restaurant-item">
        <h3>{venue.venue.name}</h3>
        <p>{venue.venue.location.address}</p>
       </div>
    );
}

export default RestaurantListing;