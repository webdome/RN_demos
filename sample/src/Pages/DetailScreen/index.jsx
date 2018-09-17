import React, {Component} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { observer, inject } from 'mobx-react';

@inject(['DetailStore'])
@observer
export default class DetailScreen extends Component {
  constructor(props){
    super(props)
    this.store = this.props.DetailStore
  }
  render(){
    let { num } = this.store
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>DetailScreen</Text>
        <View style={styles.calculate}>
          <Button title='-' onPress={()=>this.store.minus()}></Button>
          <Text style={styles.num}>{num}</Text>
          <Button title='+' onPress={()=>this.store.plus()}></Button>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  calculate: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  num: {
    margin: 20,
    fontSize: 24,
  },
});