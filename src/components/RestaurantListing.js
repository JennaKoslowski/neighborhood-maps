import React from 'react'

const RestaurantListing = ({venue}) => {


    return (
    	<button className="restaurant-item">
        <h3>{venue.venue.name}</h3>
        <p>{venue.venue.location.address}</p>
       </button>
    );
}

export default RestaurantListing;