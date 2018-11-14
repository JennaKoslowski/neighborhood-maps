import React, {Component} from 'react'
import Restaurants from './Restaurants'

class SearchBar extends Component{
//taken and modified from myReads project
	render() {
      // this.state.searchResults.filter(//.name- change to point to name of place
        //(searchResult)=> {return searchResult.venue.name.indexOf(this.state.search) !==-1});
		return (
          <div className="search-locations">
              <div className="search-location-input-wrapper">
              {/*{JSON.stringify(this.state.query)}*/}
               <input //update state and value of input field
               className="search-text"
               	type="text" 
               	placeholder="Search location"
               	value={this.props.newQuery} 
               	onChange={(e) => this.props.updateSearch(e.target.value)}
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

            {/*if (e.target.value == 0){
             //  <Restaurants foursquareData={this.props.foursquareData}/> }
            //else {  
              // <Restaurants searchResult= {this.state.searchResult}/>
      //};*/}
            </div>
          </div>
        );
	}
} 

export default SearchBar;