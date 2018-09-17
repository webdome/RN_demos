import React, { PureComponent } from 'react';
import {  View, Text, StyleSheet } from 'react-native';

export default class InfoScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.contanier}>
        <Text> InfoScreen </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  contanier: {
    flex: 1,
    backgroundColor: '#fff',
  }
})