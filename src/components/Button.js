import React from 'react';
import {StyleSheet, Text, Dimensions, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  button: {
    fontSize: 40,
    height: Dimensions.get('window').width / 4,
    width: Dimensions.get('window').width / 4,
    padding: 10,
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
    borderWidth: 0.8,
    borderColor: 'rgba(128,128,128,0.2)',
    color: 'rgb(128,128,128)',
  },
  operationButton: {
    color: '#ffff',
    backgroundColor: '#FF6600',
  },
  buttonDouble: {
    width: (Dimensions.get('window').width / 4) * 2,
  },
  buttonTriple: {
    width: (Dimensions.get('window').width / 4) * 3,
  },
});

export default props => {
  const stylesButton = [styles.button];
  if (props.double) {
    stylesButton.push(styles.buttonDouble);
  }
  if (props.triple) {
    stylesButton.push(styles.buttonTriple);
  }
  if (props.operation) {
    stylesButton.push(styles.operationButton);
  }
  return (
    <TouchableOpacity onPress={() => props.onClick(props.label)}>
      <Text style={stylesButton}>{props.label}</Text>
    </TouchableOpacity>
  );
};
