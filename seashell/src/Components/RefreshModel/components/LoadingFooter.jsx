import * as React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import {
  LoadingFooter,
  FooterStatus
} from 'react-native-spring-scrollview/LoadingFooter';
import styles from '../assets/style';

export default class extends LoadingFooter {
  onStateChange(oldStatus, newStatus) {
    if (oldStatus === 'loading' || newStatus === 'loading') {
      this.setState({ status: newStatus });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.imageBox}
          source={
            this.state.status === 'loading'
              ? require('../assets/images/loading.gif')
              : require('../assets/images/loading.png')
          }
        />
      </View>
    );
  }
}
