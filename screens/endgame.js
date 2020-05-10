import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from '../components/card';
import Color from './../constants/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

const EndGame = props => {
  return (
    <Card style={{ margin: 40, height: 300, width: 300 }}>
      <View padding={40} alignItem="center">
        <View marginLeft={40}>
          <Icon color="gold" name='trophy' size={80} />
        </View>
        <Text style={{ color: Color.theme, fontSize: 20, fontStyle: 'normal' }} >You Win in {props.steps} steps</Text>
      </View>
    </Card>
  );
}

export default EndGame;