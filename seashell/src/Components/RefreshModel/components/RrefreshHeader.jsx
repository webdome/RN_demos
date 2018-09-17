import * as React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import {
  RefreshHeader,
  HeaderStatus
} from 'react-native-spring-scrollview/RefreshHeader';
import styles from '../assets/style';

export default class extends RefreshHeader {
  onStateChange(oldStatus, newStatus) {
    if (oldStatus === 'refreshing' || newStatus === 'refreshing') {
      this.setState({ status: newStatus });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.imageBox}
          source={
            this.state.status === 'refreshing'
              ? require('../assets/images/loading.gif')
              : require('../assets/images/loading.png')
          }
        />
      </View>
    );
  }
}
