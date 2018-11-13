import React from 'react'
import RestaurantListing from './RestaurantListing'
//import axios from 'axios'

const Restaurants = ({foursquareData, ...props}) => {
  return (

    <div className="restaurant-info">
  {foursquareData.map((venue,idx) =>
      <RestaurantListing key ={idx} venue={venue} {...props}/> )}
     </div>
      )
 
}

export default Restaurants;