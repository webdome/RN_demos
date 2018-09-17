import React from 'react';
import { View } from 'react-native';
import { pxToDp } from '../../Config/utils'

export default ({ navigation }) => {
  return (
    <View style={{ height: pxToDp(40), backgroundColor: '#fff' }} />
  );
};
