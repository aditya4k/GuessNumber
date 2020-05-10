import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

import Card from './../components/card';
import Color from './../constants/colors';
import NumberContainer from '../components/number';

import Icon from 'react-native-vector-icons/FontAwesome';

// this will generate the values betwen min and max excluding
// current value.
const generateGuess = (min, max, currVal) => {
  min = Math.ceil(min);
  max = Math.ceil(max);
  const val = Math.floor(Math.random() * (max - min)) + min;
  if (val === currVal) {
    return generateGuess(min, max, val);
  }
  return val;
}

const Game = props => {
  const [currVal, setCurrVal] = useState(generateGuess(1, 100, props.targetValue));
  const [steps, setSteps] = useState(0);

  const currentHigh = useRef(100);
  const currentLow = useRef(1);

  useEffect(() => {
    if (currVal === props.target) {
      props.onfinnish(steps);
    }
  }, [currVal, props.targetValue, props.onfinnish]);

  // we pass the previous value. so that new 
  // random number should be < current and > min
  const guessLower = () => {
    if (currVal < props.target) {
      Alert.alert("Don't Lie!!!", "You are trying to cheat wrt the direction of the target values.", [{ title: 'Sorry', style: 'cancel' }]);
      return;
    }
    currentHigh.current = currVal;
    let val = generateGuess(currentLow.current, currentHigh.current, currVal);
    setCurrVal(val);
    setSteps(steps => steps + 1);
  }

  // we pass the previous value. so that new 
  // random number should be > current and > max
  const guessHigher = () => {
    if (currVal > props.target) {
      Alert.alert("Don't Lie!!!", "You are trying to cheat wrt the direction of the target values.", [{ title: 'Sorry', style: 'cancel' }]);
      return;
    }
    currentLow.current = currVal;
    let val = generateGuess(currentLow.current, currentHigh.current, currVal);
    setCurrVal(val);
    setSteps(steps => steps + 1);
  }

  const IconGreater = <Icon name="angle-right" size={30} color="red" onPress={guessHigher} />;
  const IconSmaller = <Icon name="angle-left" size={30} color="blue" onPress={guessLower} />;

  return (
    <Card style={{ margin: 40, height: 300, width: 300 }}>
      <View style={styles.gameContainer}>
        <Text style={styles.title}>Mobile's Guess</Text>
        <NumberContainer style={{ width: 50, height: 50 }} finalVal={currVal} />
        <View flexDirection="row" justifyContent="space-even">
          <View style={styles.buttonContainer}>
            {IconSmaller}{IconSmaller}
          </View>
          <View style={styles.buttonContainer}>
            {IconGreater}{IconGreater}
          </View>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  gameContainer: {
    margin: 20,
    height: '80%',
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: Color.theme,
    textAlign: 'justify',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 20
  },
  buttonContainer: {
    margin: 10,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});

export default Game;