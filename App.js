import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import Header from './components/Header';
import Circle from './components/Circle'
import Cross from './components/Cross';

export default class App extends React.Component {

  handleTouch(event) {
    console.log("event log: ",event);
  }
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <TouchableWithoutFeedback  onPress={ () => {
            console.log("inside function");
          }
        }>       
          <View style={styles.board}>
            <View style={styles.vline1} />
            <View style={styles.vline2} />
            <View style={styles.hline1} />
            <View style={styles.hline2} />          
          </View>
        </TouchableWithoutFeedback>
        <Cross xTranslate = {0} yTranslate = {90} /> 
        <Circle xTranslate= {-100} yTranslate = {90} /> 
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
    width: 3,
    height: 309,
    marginTop: 0,    
    transform: [
      {translateX: 100}
    ],
    position: 'absolute',
    backgroundColor: 'black'
  },
  vline2: {
     width: 3,
    height: 309,
    marginTop: 0,    
    transform: [
      {translateX: 200}
    ],
    position: 'absolute',
    backgroundColor: 'black'
  },
  hline1: {
    width: 309,
    height: 3,        
    position: 'absolute',
    backgroundColor: 'black',
    transform: [
      {translateY: 100}
    ]
  },
  hline2: {
    width: 309,
    height: 3,        
    position: 'absolute',
    backgroundColor: 'black',
    transform: [
      {translateY: 200}
    ]
  } 
});
