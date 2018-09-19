/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  NativeModules,
  requireNativeComponent,
  NavigatorIOS
} from 'react-native';
// import TakePhotoiOS from './TakePhotoiOS';

const Test = NativeModules.Test
const RCTTest = requireNativeComponent('RCTTest',null);

export default class App extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: MyScene,
          title: 'ios native module/UI',
        }}
        style={{flex: 1}}
      />
    );
  }
}

class MyScene extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button style={styles.instructions} onPress={()=>Test.printAction()} title='go ios setting by calling native method' />
        <RCTTest style={{width: 300, height: 60, backgroundColor: 'green', margin: 5}} name='Jons'/>
        {/* <Button
          title='相机'
          onPress={() => {
            this.props.navigator.push({
              component: TakePhotoiOS,
              title: '相册',
            });
          }}
        /> */}
      </View>
    );
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
    fontSize: 18,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
