import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.headerFont}>Tic Tac Toe</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {        
    flexDirection: 'row',    
    backgroundColor: '#0288D1',    
  },
  headerFont: {
    flex: 1,    
    color: '#FAFAFA',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
