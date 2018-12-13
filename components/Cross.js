import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Cross extends React.Component {
    render() {
        const {xTranslate, yTranslate} = this.props;
      return (
        <View style={styles.container}>          
          <View style={[styles.cross1, {
              transform: [        
                {translateX: xTranslate ? xTranslate : 0},
                {translateY: yTranslate ? yTranslate : 90},
                {rotate: '45deg'},
            ],
          }]} />
          <View style={[styles.cross2, {
            transform: [        
                {translateX: xTranslate ? xTranslate : 0},
                {translateY: yTranslate ? yTranslate : 90},
                {rotate: '135deg'},
            ],
          }]} />
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {      
      width : 90,
      height: 90,      
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',    
    },
   cross1: {
    width : 90,
    height: 8,        
    backgroundColor: '#D81B60',
    position: 'absolute',
  },
  cross2: {
    width : 90,
    height: 8,        
    backgroundColor: '#D81B60',
    position: 'absolute',
  },
  });