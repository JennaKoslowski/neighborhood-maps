import React, {Component} from 'react'
import Restaurants from './Restaurants';

class SearchBar extends Component{

  state= {
    query: '',
    venues: [],
    searchResults: [],
    updateSearch: '',
    markers: []
  }

	render() {
        
		return (
          <div className="search-locations">
              <input className="search-location-input-wrapper" style= {{backgroundColor: 'white'}} type="text" />

            <div className="location-list">    
             {/* <Restaurants foursquareData={this.state.foursquareData}/>*/}
            </div> 

          </div>
        );
	}
} 

export default SearchBar;