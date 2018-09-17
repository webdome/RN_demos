import React from "react";
import { View, Text, Button } from "react-native";
import { DeviceStorage } from "../../Config/utils";
import {observer,inject} from 'mobx-react';


@inject(['HomeStore'])
@observer
export default class DetailScreen extends React.Component {
  constructor(props){
    super(props)
    this.store = this.props.HomeStore
    this.state = {
      detail: {}
    }
  }

  componentWillMount(){
    DeviceStorage.get('detail').then(value=>{
      this.setState({
        detail: value
      })
    })
  }

  render() {
    let { num } = this.store
    return (
      <View>
        <Text>
          {JSON.stringify(this.state.detail)}
        </Text>
        <View style={{display: 'flex',justifyContent: 'center', alignItems: 'center'}}>
          <Button title='-' onPress={() => this.store.minus()}></Button>
          <Text>{num}</Text>
          <Button title='+' onPress={() => this.store.plus()}></Button>
        </View>
      </View>
    )
  };

}
