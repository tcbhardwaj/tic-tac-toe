import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.board} />
        <View style={styles.vline1} />
        <View style={styles.vline2} />
        <View style={styles.hline1} />
        <View style={styles.hline2} />
        <View style={styles.cross1} />
        <View style={styles.cross2} />
        <View style={styles.circle} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E1F5FE',
    alignItems: 'center',
    marginTop: 30,
    margin: 10,
  },
  board: {
    width: 312,
    height: 312,
    borderWidth: 3,
    marginTop: 50,
  },
  vline1: {
    width: 100,
    height: 312,
    marginTop: 85,
    borderLeftWidth: 3,
    position: 'absolute',
  },
  vline2: {
    width: 100,
    height: 312,
    marginTop: 85,
    borderRightWidth: 3,
    position: 'absolute',
  },
  hline1: {
    width: 312,
    height: 100,
    marginTop: 85,
    borderBottomWidth: 3,
    position: 'absolute',
  },
  hline2: {
    width: 312,
    height: 200,
    marginTop: 85,
    borderBottomWidth: 3,
    position: 'absolute',
  },
  cross1: {
    width : 100,
    height: 8,
    top: 130,
    left: 18,
    transform: [{rotate: '45deg'}],
    backgroundColor: 'black',
    position: 'absolute',
  },
  cross2: {
    width : 100,
    height: 8,
    top: 130,
    left: 18,
    transform: [{rotate: '135deg'}],
    backgroundColor: 'black',
    position: 'absolute',
  },
  circle: {
    width : 90,
    height: 90,
    top: 190,
    left: 225,
    borderRadius: 50,
    borderWidth: 6,    
    position: 'absolute',
  }
});
