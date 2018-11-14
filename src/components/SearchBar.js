import React, {Component} from 'react'
import Restaurants from './Restaurants'

class SearchBar extends Component{
//taken and modified from myReads project
searchVenues = () =>{
  if (this.state.query.trim() !== "") {
    const venues = this.props.venues.filter(venue => venue.name.toLowerCase().includes(this.state.query.toLowerCase()))
    return venues;
  }
  return this.props.venues;
};

updateSearch=(query)=> {
     this.markers.forEach(marker=>{
        if (this.props.query == 0){
               <Restaurants foursquareData={this.props.foursquareData}/> }
        else {  
               <Restaurants searchResult= {this.state.searchResult}/>
      };
      this.setState({query: query});
    })
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
               	value={this.props.query} 
               	onChange={e => this.props.updateSearch(e.target.value)}
               	/>
              </div>
            <div className="search-locations-results">
           
              <ol className="location-list">
              		{/*{this.state.searchResults.map(searchResult => {
                    console.log(searchResult)
                    return(
                          <li key={searchResult.name}> 
                           <Restaurants foursquareData={this.props.foursquareData}/>
                          </li>) 
                        } )} */}
              	</ol> 

            {/**/}
            </div>
          </div>
        );
	}
} 

export default SearchBar;