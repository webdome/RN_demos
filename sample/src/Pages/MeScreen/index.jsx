import React, {PureComponent} from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class MeScreen extends PureComponent {
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>MeScreen</Text>
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
});