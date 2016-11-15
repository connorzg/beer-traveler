import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Switch,
  Text
} from 'react-native';
import {ListView} from 'realm/react-native';
import realm from '../utils/realm';
import axios from 'axios';
import SearchBar from './SearchBar.js';
import Dropdown from './Dropdown.js';
import NavBar from './NavBar.js';
import CityLocation from './CityLocation.js';
import BeerList from './BeerList.js';
import BreweryList from './BreweryList.js';
import BrewerySearch from './BrewerySearch.js';



export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ''
    }
  }

  render() {

    return(
      <View style={styles.container}>
        <SearchBar />
        <Dropdown />
        <NavBar />
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  searchContainer: {
    flex: 1,
    marginHorizontal: 100,
  },
  searchBar: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    color: 'gray',
    backgroundColor: 'white',
  },
  pickerContainer: {
    flex: 1
  },
  picker: {
    flex: 1,
    height: 100
  },
  navContainer: {
    flex: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    paddingBottom: 30
  },
  nav: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10
  }
})
