import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Color from './../constants/colors';

const NumberContainer = props => {
  return (
    <View style={{...styles.numberContainer, ...props.style}}>
        <Text fontSize='30'>{props.finalVal}</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  numberContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Color.theme
  }
});

export default NumberContainer;