import React, {Component} from 'react'
import RestaurantListing from './RestaurantListing'
//import axios from 'axios'

class Restaurants extends Component{

 render() {

  return (

    <div className="restaurant-info">
  
      <RestaurantListing foursquareData={this.foursquareData}/>
     </div>
      )
  }
}

export default Restaurants;