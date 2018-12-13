import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Circle extends React.Component {
    render() {
      const {xTranslate, yTranslate} = this.props;
      return (
        <View style={styles.container}>          
          <View style={[styles.circle,
          {
            transform: [        
                {translateX: xTranslate ? xTranslate : 0},
                {translateY: yTranslate ? yTranslate : 90},                
            ],
          }]} />
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {      
      alignItems: 'center',      
      position: 'absolute',
      marginTop: 2
    },   
    circle: {
      width: 90,
      height: 90,     
      borderRadius: 50,
      borderWidth: 6,          
      position: 'absolute',
      borderColor: 'deepskyblue'      
    }
  });