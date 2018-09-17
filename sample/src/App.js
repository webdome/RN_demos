/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { View } from 'react-native';
import { Provider } from "mobx-react";
import store from "~store";
import AppNavigation from '~navigation';

export default class App extends Component {
  render() {
    return (
      <Provider {...store}>
        <View style={{flex: 1}}>
          <AppNavigation />

        </View>
      </Provider>
    );
  }
}
