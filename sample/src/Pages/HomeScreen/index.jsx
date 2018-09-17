import React, { PureComponent } from 'react';
import { View, StyleSheet, Text } from "react-native";
import { fetchBanner } from '~api'
import MobxTest from "./components/mobx-test";

export default class HomeScreen extends PureComponent {
  componentDidMount(){
    this._getBanner()
  }
  async _getBanner(){
    let {data} = await fetchBanner({
      bannerNumber: 5,
      floatNumber: 1
    })
    console.log(data);
    
  }
  render() {
    return (
      <View style={styles.container}>
      <Text onPress={()=>{this.props.navigation.push('Detail')}}> go Detail </Text>
        <MobxTest></MobxTest>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  }
});