import React, { useState } from 'react';
import { Button, View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';

import Card from './../components/card';
import Color from './../constants/colors'
import Input from './../components/input'
import Summary from './../components/summary'

const StartGame = props => {
  const [userValue, setUserValue] = useState('');
  const [resultVal, setResultVal] = useState();
  const [confimed, setConfirmed] = useState(false);

  // create a function which does the reset.
  const resetHandler = () => {
    setUserValue('');
    setConfirmed(false);
    setResultVal();
  }

  const addUserValue = val => {
    setUserValue(val.replace(/[^0-9]/g, ''));
  }

  const confirmStartHandler = () => {
    let chosenNum = parseInt(userValue);
    if (isNaN(chosenNum) || chosenNum <= 0 || chosenNum >= 100) {
      Alert.alert("Invalid Input!!", "The Number Should be Between 1-99", [{ text: 'OK', style: 'destructive', onPress: resetHandler }]);
      return;
    }
    setResultVal(chosenNum);
    setConfirmed(true);
    setUserValue('');
  }

  //let confirmedOutput;
  let summaryOutput;
  if (confimed === true) {
    summaryOutput = <Summary finalVal={resultVal} onStart={props.onStart}/>
  }

  return (
    <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
      <View style={styles.screen}>
        <Text style={styles.title}>
          Start A New Game!
      </Text>
        <Card style={styles.inputContainer}>
          <Text>Enter The Number</Text>
          <Input onChangeText={addUserValue} value={userValue} autoCapitalize='none' autoCorrect={false} keyboardType='number-pad' maxLength={2} style={styles.input} />
          <View style={styles.buttonContainer}>
            <View style={styles.resetButton}>
              <Button title='Reset' color={Color.accent} onPress={resetHandler} />
            </View>
            <View style={styles.goodButton}>
              <Button title='Start' color={Color.fortune} onPress={confirmStartHandler} />
            </View>
          </View>
        </Card>
        {summaryOutput}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 8,
    padding: 40,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: 'bold',
    marginVertical: 10
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center'
  },
  input: {
    width: 40,
    height: 30,
    borderBottomColor: Color.accent,
    marginVertical: 10
  },
  goodButton: {
    width: 80,
    marginHorizontal: 10,
    borderRadius: 10,
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowOffset: {
      width: 2,
      height: 2
    }
  },
  badButton: {
    width: 80,
    marginHorizontal: 10,
    borderRadius: 10,
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowOffset: {
      width: 2,
      height: 2
    }
  },
  resetButton: {
    width: 80,
    marginHorizontal: 10,
    borderRadius: 10,
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowOffset: {
      width: 2,
      height: 2
    }

  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});

export default StartGame;