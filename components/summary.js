import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import Color from './../constants/colors'
import NumberContainer from './number';

const Summary = props => {
  return (
    <View style={styles.summaryContainer}>
      <Text fontSize='16' fontStyle='bold'> Number Entered: </Text>
      <NumberContainer finalVal={props.finalVal} style={styles.numberContainer} />
      <Button title='Start' onPress={props.onStart(props.finalVal)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  summaryContainer: {
    height: 100,
    width: '50%',
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Color.theme
  },
  numberContainer: {
    height: 50,
    width: '50%',
  }
});

export default Summary;