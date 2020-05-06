import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import Header from './components/header';
import StartGame from './screens/startgame';
import Game from './screens/game';
import EndGame from './screens/endgame';


export default function App() {
  const [targetValue, setTargetValue] = useState();
  const [gameScreen, setGameScreen] = useState(false);
  const [steps, setSteps] = useState(0);

  const startGameScreenHandler = (val) => {
    setGameScreen(true);
    setTargetValue(parseInt(val));
    setSteps(0);
  }

  const setStepsHandler = val => {
    console.log('Total Steps Taken: ', val);
    setSteps(val);
    setGameScreen(false);
  }

  let screenLayout = <StartGame onStart={startGameScreenHandler} />;
  if (gameScreen === true && steps == 0) {
    screenLayout = <Game target={targetValue} onfinnish={setStepsHandler} />
  } else if (gameScreen === false && steps > 0) {
    screenLayout = <EndGame steps={steps} />
  } else {

  }

  return (
    <View style={styles.root}>
      <Header title='Guess The Number' />
      {screenLayout}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  }
});