import React, {Component} from 'react'
import RestaurantListing from './RestaurantListing'
//import axios from 'axios'

class Restaurants extends Component{

 render() {

  return (

    <ol className="restaurant-info">
  {this.props.venues && this.props.venues.map((venue,idx) =>
      <RestaurantListing key ={idx} {...venue}/> )}
     </ol>
      )
  }
}

export default Restaurants;