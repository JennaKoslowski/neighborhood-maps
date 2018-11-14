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
//taken and modified from myReads project
searchVenues = () =>{
  if (this.state.query.trim() !== "") {
    const venues = this.props.foursquareData.filter(venue =>venue.name.toLowerCase().includes(this.state.query.toLowerCase()) )
    return venues;
  }
  return this.props.venues;
};

  handleChange = e => {
    this.setState({ query: e.target.value});
    const markers = this.props.foursquareData.map(venue=>{
      console.log(venue);
      const venueC =this.state.markers.find(marker => marker.id===venue.id )=== true;
               if (venue.venue.name.toLowerCase().includes(e.target.value.toLowerCase())) {
                venueC.isVisible = true 
                }
               else {
                venueC.isVisible = false}
               return venueC});
    this.props.updateSuperState({markers})
};

	render() {
      // this.state.searchResults.filter(//.name- change to point to name of place
        //(searchResult)=> {return searchResult.venue.name.indexOf(this.state.search) !==-1});
		return (
          <div className="search-locations">
              <div className="search-location-input-wrapper">
              {JSON.stringify(this.state.query)}
               <input 
               className="search-text"
               	type="search" 
                id= "search"
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