import React, {Component} from 'react'
import Restaurants from './Restaurants'

class SearchBar extends Component{
//taken and modified from myReads project
 state = {
 query: '',
 searchResults: [],
 updateSearch: ''
}
//componentWillReceiveProps = props => {
  //  console.log(props);
    //const searchResults = props; 
  //};

	updateSearch = (query) => {
	  	this.setState({query: query})
	  	//this.updateSearched(query);
	  }

   /*updateSearched = (query) => {
    if (query){
            {foursquareData}.search(query).then(searchResults => // chage state of searchResults
              {
            if(searchResults.error){ //this.state or no- check github if no results when typing/ backspace keep as array
              this.setState({searchResults: []}) 
            } else{
              this.setState({searchResults:searchResults})
            } } ) }
    else {
      this.setState({searchResults: []})
    }
  } search was a function they created in the BooksAPI file
*/ 
	render() {
       this.state.searchResults.filter(//.name- change to point to name of place
        (searchResult)=> {return searchResult.venue.name.indexOf(this.state.search) !==-1});
		return (
          <div className="search-locations">
              <div className="search-location-input-wrapper">
              {/*{JSON.stringify(this.state.query)}*/}
               <input //update state and value of input field
               className="search-text"
               	type="text" //user enters text
               	placeholder="Search location"
               	value={this.state.value} 
               	onChange={(e) => this.updateSearch(e.target.value)} //not a function
               	/>
              </div>
            <div className="search-locations-results">
             <Restaurants foursquareData={this.props.foursquareData}/>
              <ol className="location-list">
              		{this.state.searchResults.map(searchResult => {
                    console.log(searchResult)
                    return(
                          <li key={searchResult.name}> 
                            <Restaurants
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