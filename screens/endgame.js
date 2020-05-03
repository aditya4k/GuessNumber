import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from '../components/card';
import Color from './../constants/colors';

const EndGame = props => {
  return (
    <Card style={{ margin: 40, height: 300, width: 300 }}>
      <Text style={{ color: Color.theme, fontSize: 30, fontStyle: 'normal' }} >You Win in {props.steps} steps</Text>
    </Card>
  );
}

export default EndGame;