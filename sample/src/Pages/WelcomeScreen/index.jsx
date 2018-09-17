import React, { PureComponent } from 'react';
import {  View, Text, StyleSheet } from 'react-native';

export default class WelcomeScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.contanier}>
        <Text> WelcomeScreen </Text>
        <Text onPress={()=>{this.props.navigation.push('Tabs')}}> go home </Text>
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