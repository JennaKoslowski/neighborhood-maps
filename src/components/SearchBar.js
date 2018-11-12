import React, {Component} from 'react'
import location from '../data/location.json'
import Restaurants from './Restaurants'

class SearchBar extends Component{
//taken/ modified from myReads project
 state = {
 query: '',
 searchResults: [],
}

  //componentDidMount() {
   // window.locations.getAll().then((locations)=>{
    //      this.setState({locations: locations})}
   // ) }

	updateSearch = (query) => {
	  	this.setState({query: query})
	  	this.updateSearched(query);
	  }

   updateSearched = (query) => {
    if (query){
            location.search(query).then((searchResults)=> // chage state of serachResults
              {
            if(searchResults.error){ //if no results when typing/ backspace keep as array
              this.setState({searchResults: []}) 
            } else{
              this.setState({searchResults:searchResults})
            } } ) }
    else {
      this.setState({searchResults: []})
    }
  }

	render() {
      
		return (
          <div className="search-locations">
              <div className="search-location-input-wrapper">
              {JSON.stringify(this.state.query)}
               <input //update state and value of input field
               className="search-text"
               	type="text" //user enters text
               	placeholder="Search location"
               	value={this.state.query} 
               	onChange={(e) => this.updateSearch(e.target.value)} 
               	/>
              </div>
            <div className="search-books-results">
              <ol className="location-list"> {/*display books matching searchResults*/}
              		{this.state.searchResults.map(searchResult => {
                    return(
                          <li key={searchResult.name}> 
                            <Restaurants locations={searchResult}
                            updateResults={this.props.updateResults}
                           />
                          </li>) 
                        } )} 
              	</ol>
            </div>
          </div>
        );
	}
} 

export default SearchBar;