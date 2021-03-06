import React, { Component } from 'react'
import Map from './components/Map'
//import Restaurants from './components/Restaurants'
import './App.css'
import SearchBar from './components/SearchBar'
import axios from 'axios'


class App extends Component {

state = {
  createMarkers: [],
  locations: [],
  foursquareData:[],
  marker:[],
  searchResults:[],
  updateSuperState: obj => {this.setState(obj);}
}

componentDidMount() {
  this.renderFoursquare()
}

 renderFoursquare = (query) => { //need to use in both searchbar and restaurants
  const endpoint= "https://api.foursquare.com/v2/venues/explore?"
  let foursquareInfo= { //https://alligator.io/react/axios-react/
    client_id: "5GRVKAT5C2F1EALKLBKBQQLJPSL2CKLUQXSQI3O3LHANQNK5",
    client_secret: "GETW1UOWQITCGPGNCIDQTA3QSZ2PD1YCD4HFT3BCFE4MXXO4",
    near: "Green Bay",
    query: "coffee",
    limit: 10,
    radius: 16093.4,
    v: "20181106"
  }
  axios.get(endpoint + new URLSearchParams(foursquareInfo))
  .then(res => {
   // const foursquareData = res.data.response.groups[0].items
    this.setState({foursquareData: res.data.response.groups[0].items});
  }).catch(error=> {
    console.log("Error:" +error)
  }) 
}

updateSearch = (query) => {
  this.setState({query: query})
  this.updateSearched(query);
}

updateSearched = (query) => {
if (query){
        axios.search(query).then((searchResults)=> // chage state of serachResults
          {
        if(searchResults.error){ //if no results when typing/ backspace keep as array
          this.setState({searchResults: []}) 
        } else{
          this.setState({searchResults:searchResults})
        } } )}
else {
  this.setState({searchResults: []})
}
}

  render() {
    return (
      <main>
      <h1>Coffee in Green Bay, WI</h1>
      <div className="web-content">
      <SearchBar updateSuperState= {this.state.updateSuperState} foursquareData={this.state.foursquareData} />
      {/*pass down search results needed ^ */}
      <div><Map {...this.state}
        role= "application" 
       aria-label = "map" 
        /></div>
    </div>
      </main>
    );
  }
}

export default App;