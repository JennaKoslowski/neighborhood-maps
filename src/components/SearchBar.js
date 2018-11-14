import React, {Component} from 'react'
import Restaurants from './Restaurants'

class SearchBar extends Component{

  state= {
     query: '',
     venues: [],
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

  handleChange = e => {
    this.setState({ query: e.target.value})
    const markers = this.props.foursquareData.map(marker=>{
      marker.venue.name.toLowerCase().includes(e.target.value.toLowerCase()) == true ?
               marker.isVisible = true 
               : 
               marker.isVisible = false
               return marker});
    const allMark = this.props.markers;
    this.props.updateSuperState({markers: Object.assign(allMark, markers)})
};

	render() {
      // this.state.searchResults.filter(//.name- change to point to name of place
        //(searchResult)=> {return searchResult.venue.name.indexOf(this.state.search) !==-1});
		return (
          <div className="search-locations">
              <div className="search-location-input-wrapper">
              {/*{JSON.stringify(this.state.query)}*/}
               <input 
               className="search-text"
               	type="search" 
               	placeholder="Search location"
                aria-label="Search through site content"
                value= {this.state.query}
                onChange={this.handleChange}
               	/>
              </div>
            <div className="search-locations-results">
            <div className="location-list">    
               <Restaurants foursquareData={this.props.foursquareData}/>  
                </div> 

            </div>
          </div>
        );
	}
} 

export default SearchBar;