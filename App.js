import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import Header from './components/Header';
import Circle from './components/Circle';
import Cross from './components/Cross';
import { centerPoint, areas, winCondition } from './constants/game';

export default class App extends React.Component {
  constructor() {
    super();
    /**
     * winner = -1 game continue
     * winner = 1 player1 wins
     * winner = 2 player2 wins
     * winner = 0 its a draw
     */
    this.state = {
      player1: [],
      player2: [],
      player1Turn: true,
      winner: -1
    };
  }

  playGame(event) {
    const { locationX, locationY } = event.nativeEvent;
    const {player1, player2, player1Turn, winner} = this.state;
    
    const area = areas.find(
      d =>
        locationX >= d.startx &&
        locationX <= d.endx &&
        (locationY >= d.starty && locationY <= d.endy)
    );
    const alInput = player1.concat(player2);
    if (area && player1Turn && alInput.every(d => d !== area.id)) {
      this.setState({
        player1: player1.concat(area.id),
        player1Turn: false,
      });
    } else if (area && !player1Turn && alInput.every(d => d !== area.id)) {
      this.setState({
        player2: player2.concat(area.id),
        player1Turn: true,
      });
    }
    const input = player1.concat(player2);
    console.log("input.length:", input.length);
    if(input.length === 8 && winner !== 0) {
      this.draw();      
    }

    if(input.length >= 4) {
      let res = this.calculateWinner(player1);
      console.log("res:",res);
      if(res.length > 0) {
        //player1 is winner
        console.log("player1 win");
        return;
      }
      res = this.calculateWinner(player2);
      if(res.length > 0) {
        //player2 is winner
        console.log("player2 win");
        return;
      }
    }
    
  }

  calculateWinner(input) {
    console.log("inside winner input:", input);
    const res = winCondition.filter(item => {
      if((input.sort().toString()).indexOf(item.toString()) > -1 ){
        return;
      }
    });
    return res;
  }

  draw() {
    console.log("inside draw");
    this.setState({
        winner: 0
    })
  }
  // componentDidUpdate() {
  //   const {player1, player2, winner} = this.state;
  //   const input = player1.concat(player2);

  //   // if(input.length >= 5) {
  //   //   let res = this.calculateWinner(player1);
  //   //   if(res) {
  //   //     //player1 is winner
  //   //     return;
  //   //   }
  //   //   res = this.calculateWinner(player2);
  //   //   if(res) {
  //   //     //player2 is winner
  //   //     return;
  //   //   }
  //   // }

  //   if(input.length === 9 && winner != 0) {
  //     this.draw();      
  //   }
  // }
  render() {
    const {winner} = this.state;
    return (
      <View style={styles.container}>
        <Header />
        <TouchableWithoutFeedback onPress={event => this.playGame(event)}>
          <View style={styles.board}>
            <View style={styles.vline1} />
            <View style={styles.vline2} />
            <View style={styles.hline1} />
            <View style={styles.hline2} />
          </View>
        </TouchableWithoutFeedback>
        {this.state.player1.map((d, i) => {
          return (
            <Cross
              key={i}
              xTranslate={centerPoint[d].x}
              yTranslate={centerPoint[d].y}
            />
          );
        })}
        {this.state.player2.map((d, i) => {
          return (
            <Circle
              key={i}
              color= 'deepskyblue'
              xTranslate={centerPoint[d].x}
              yTranslate={centerPoint[d].y}
            />
          );
        })}
        <View style={{ flex: 1, margin: 20 }}>          
          {winner === 0 && <Text style={{ fontSize: 20, fontWeight: 'bold', paddingRight: 30 }}>Its a draw  </Text>}     
        </View>
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
    transform: [{ translateX: 100 }],
    position: 'absolute',
    backgroundColor: 'black',
  },
  vline2: {
    width: 3,
    height: 309,
    marginTop: 0,
    transform: [{ translateX: 200 }],
    position: 'absolute',
    backgroundColor: 'black',
  },
  hline1: {
    width: 309,
    height: 3,
    position: 'absolute',
    backgroundColor: 'black',
    transform: [{ translateY: 100 }],
  },
  hline2: {
    width: 309,
    height: 3,
    position: 'absolute',
    backgroundColor: 'black',
    transform: [{ translateY: 200 }],
  },
});
