import React, {Component} from 'react'
import Restaurants from './Restaurants'

class SearchBar extends Component{

  state= {
     query: '',
  searchResults: [],
  updateSearch: ''
  }
//taken and modified from myReads project
searchVenues = () =>{
  if (this.state.query.trim() !== "") {
    const venues = this.props.venues.filter(venue =>venue.name.toLowerCase().includes(this.state.query.toLowerCase()) )
    return venues;
  }
  return this.props.venues;
};

  handleChange(query){
    this.markers.forEach(marker=>{
      marker.name.toLowerCase().includes(query.toLowerCase()) == true ?
               marker.isVisible(true) 
               : 
               marker.isVisible(false) });
    this.setState({query: query})
};

	render() {
      // this.state.searchResults.filter(//.name- change to point to name of place
        //(searchResult)=> {return searchResult.venue.name.indexOf(this.state.search) !==-1});
		return (
          <div className="search-locations">
              <div className="search-location-input-wrapper">
              {/*{JSON.stringify(this.state.query)}*/}
               <input update state and value of input field
               className="search-text"
               	type="text" 
               	placeholder="Search location"
                aria-label="Search through site content"
                onChange={this.props.handleChange}
               	/>
              </div>
            <div className="search-locations-results">
           

            </div>
          </div>
        );
	}
} 

export default SearchBar;