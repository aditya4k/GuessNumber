import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = props => {
  return (
    // merge the styles coming from outside into this.
    <View style={{...styles.card, ...props.style}}>{props.children}</View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    backgroundColor: "white",
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 6,
    borderRadius: 10,
    shadowColor: 'red',
    elevation: 5
  }
});

export default Card;