import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Circle extends React.Component {
    render() {
      return (
        <View style={styles.container}>          
          <View style={styles.circle} />
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width : 90,
      height: 90,
      backgroundColor: '#E1F5FE',
      alignItems: 'center',
      marginTop: 30,
      margin: 10,
    },
   
    circle: {
      top: 190,
      left: 225,
      borderRadius: 50,
      borderWidth: 6,    
      position: 'absolute',
    }
  });