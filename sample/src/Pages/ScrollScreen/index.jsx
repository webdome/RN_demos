import React, {Component} from 'react';
import { View, Text, StyleSheet, Button, ScrollView, RefreshControl } from 'react-native';

export default class DetailScreen extends Component {
  constructor(props){
    super(props)
    this.state = {
      refreshing: false,
    };
  }

  _onRefresh = () => {
    this.setState({refreshing: true});
    setTimeout(()=>{this.setState({refreshing: false})},2000)
  }

  render(){
    let list = []
    for (let index = 0; index < 50; index++) {
      list.push(index)
    }
    return (
      <ScrollView 
        style={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />
        }
      >
        {
          list.map(item=>{
            return <Text key={item}>{item}</Text>
          })
        }
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});