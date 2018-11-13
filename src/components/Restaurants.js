import React, {Component} from 'react'
import RestaurantListing from './RestaurantListing'
//import axios from 'axios'

class Restaurants extends Component{

 render() {

  return (

    <div className="restaurant-info">
  {this.props.foursquareData.map((venue) =>
      <RestaurantListing {...this.props}/> )}
     </div>
      )
  }
}

export default Restaurants;