import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header =  props => {
  return (
    <View style={styles.header}>
      <Text>{props.title}</Text>
    </View>
  );
}

// So create is a function that takes the object
// and returns to the styles object. That's why 
// the brackets are of the form: ({});
const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '13%',
    paddingTop: 30,
    backgroundColor: 'deeppink', //#f7287b#
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerTitle: {
    color: 'black',
    fontSize: 20,
    fontStyle: 'normal'
  }
});

export default Header;