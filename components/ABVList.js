import React, {Component} from 'react';
import {
  PixelRatio,
  StyleSheet,
  Text,
  View
} from 'react-native';
import axios from 'axios';
import {ListView} from 'realm/react-native';
import Beer from './Beer.js';
import BeerList from './BeerList.js';
import Spinner from 'react-native-loading-spinner-overlay';

export default class ABVList extends Component{
  constructor(props){
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1,r2) => r1 !== r2
    })

    this.state = {
      beers: dataSource.cloneWithRows([]),
      visible: false
    }
    this._getBreweries = this._getBreweries.bind(this);
    this._renderBeers = this._renderBeers.bind(this);
  }

  _getBreweries(){
    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1,r2) => r1 !== r2
    })
    this.setState({
      visible: !this.state.visible
    })
    var searchString = `https://api.brewerydb.com/v2/beers?abv=${this.props.abvValue}&key=71adb5730d8b61f38b3894fa400f85a7`;
    fetch(searchString).then((response) => response.json())
    .then((responseText) => {
      this.setState({
        beers: dataSource.cloneWithRows(responseText.data),
        visible: !this.state.visible
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  _renderBeers(beerObject){
    return(
      <Beer beerObject={beerObject} />
    )
  }

  componentDidMount(){
    this._getBreweries();
  }

  render(){
    return(
      <View>
        <View style={{flex: 1}}>
          <Spinner overlayColor={'rgba(0,0,0,0.1)'} color={'#f7b20a'} visible={this.state.visible} />
        </View>
        <BeerList
          navigator={this.props.navigator}
          beers={this.state.beers}
        />
      </View>
    )
  }
}
