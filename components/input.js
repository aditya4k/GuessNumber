import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

import Color from './../constants/colors'

const Input = props => {
  return (
      <TextInput {...props} style={{ ...styles.input, ...props.style }} />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 30,
    textAlign: 'center',
    alignItems: 'center',
    borderBottomColor: Color.bottom,
    borderBottomWidth: 2
  }
});

export default Input;