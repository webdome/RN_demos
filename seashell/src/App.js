/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Root } from 'native-base';
import { Provider } from "mobx-react";
import store from "./Store";
import AppNavigation from './Navigation'
import './Assets/styles'

export default class App extends React.Component {
  render() {
    return (
      <Root>
        <Provider {...store}>
          <AppNavigation />
        </Provider>
      </Root>
    );
  }
}

