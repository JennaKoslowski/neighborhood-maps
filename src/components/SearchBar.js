import React, {Component} from 'react'
import Restaurants from './Restaurants'

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
              <div className="search-location-input-wrapper">
              {/*{JSON.stringify(this.state.query)}*/}
              
              </div>
            <div className="search-locations-results">
            <div className="location-list">    
              
            </div> 

            </div>
          </div>
        );
	}
} 

export default SearchBar;