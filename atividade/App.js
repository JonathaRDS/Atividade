'use strict';
 
import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
 
import SwipeCards from 'react-native-swipe-cards';
 
class Card extends React.Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <View style={styles.card}>
        <Image style={styles.thumbnail} source={{uri: this.props.image}} />
        <Text style={styles.text}>Setembro Amarelo</Text>
      </View>
    )
  }
}
 
class NoMoreCards extends React.Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <View style={styles.noMoreCards}>
        <Text>Fim Dos Gifs</Text>
      </View>
    )
  }
}
 
const cards = [
  {name: '1', image: 'https://sp.unifesp.br/epm/pediatria/images/CSP/USER/Jornalista_-_Loane/imagens_capa/setembro-amarelo.gif'},
  {name: '2', image: 'https://www.bonito.ms.gov.br/wp-content/uploads/2022/09/setembro-amarelo-bonito.gif'},
  {name: '3', image: 'https://cdn.mensagenscomamor.com/content/images/m000558209.gif?v=1https://cdn.mensagenscomamor.com/content/images/m000558209.gif?v=1'},
  {name: '4', image: 'https://media4.giphy.com/media/kGjMUPLq2gEhzJtAae/giphy.gif'},
  {name: '5', image: 'https://media4.giphy.com/media/L0Z7gVeFWKFjq6LS9d/giphy.gif?cid=6c09b952ntyflbwk8f5m0bzrcv9uyk26bmow5w78lkkbojmd&rid=giphy.gif&ct=ts'},
  {name: '6', image: 'https://c.tenor.com/fudvL9K0uZEAAAAM/setembro-amarelo.gif'},
  {name: '7', image: 'https://pa1.narvii.com/6942/6f58d72bf838cbfb8ea77c9be31109f8a62c484ar1-500-500_hq.gif'},
  {name: '8', image: 'https://media0.giphy.com/media/QyQF2SRw8nm91tbgMf/giphy.gif?cid=6c09b952to80l4w9nxp0yryzyjflqc70tj3hzxg6dytak7nc&rid=giphy.gif&ct=s'},
  {name: '9', image: 'https://media0.giphy.com/media/Ykn3KpDtbCnavDi1Hb/200w.gif?cid=82a1493bnv3dx84a67tx9v2bbdsf7i9n4q4spwwm03bhfjgn&rid=200w.gif&ct=s'},
]
 
const cards2 = [
  {name: '10', image: 'https://media0.giphy.com/media/ZaoMsCNhFqDdcxHHDK/200w.gif?cid=82a1493b834ez66c776quf26p1qfzf76vj36yuorrx8rkoy6&rid=200w.gif&ct=s'},
  {name: '11', image: 'https://media0.giphy.com/media/dudf7CUbkrqDj7NsYz/200w.gif?cid=82a1493bnv3dx84a67tx9v2bbdsf7i9n4q4spwwm03bhfjgn&rid=200w.gif&ct=s'},
  {name: '12', image: 'https://media1.giphy.com/media/Y2yuTPJ7vOuHUMv9Oo/200w.gif?cid=82a1493bnv3dx84a67tx9v2bbdsf7i9n4q4spwwm03bhfjgn&rid=200w.gif&ct=s'},
  {name: '13', image: 'https://media4.giphy.com/media/kQ9VZhrbL8uGbEWln6/200w.gif?cid=82a1493bnv3dx84a67tx9v2bbdsf7i9n4q4spwwm03bhfjgn&rid=200w.gif&ct=s'},
]
 
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: cards,
      outOfCards: false
    }
  }
 
  handleYup (card) {
    console.log("Curtido")
  }
 
  handleNope (card) {
    console.log("Visto")
  }
 
  cardRemoved (index) {
    console.log(`The index is ${index}`);
 
    let CARD_REFRESH_LIMIT = 3
 
    if (this.state.cards.length - index <= CARD_REFRESH_LIMIT + 1) {
      console.log(`There are only ${this.state.cards.length - index - 1} cards left.`);
 
      if (!this.state.outOfCards) {
        console.log(`Adding ${cards2.length} more cards`)
 
        this.setState({
          cards: this.state.cards.concat(cards2),
          outOfCards: true
        })
      }
 
    }
 
  }
 
  render() {
    return (
      <SwipeCards
        cards={this.state.cards}
        loop={true}
 
        renderCard={(cardData) => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}
        showYup={true}
        showNope={true}
        stack={true}
        handleYup={this.handleYup}
        handleNope={this.handleNope}
        cardRemoved={this.cardRemoved.bind(this)}
      />
    )
  }
}
 
const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: 'grey',
    backgroundColor: 'grey',
    borderWidth: 1,
    elevation: 1,
  },
  thumbnail: {
    width: 300,
    height: 300,
  },
  text: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10
  },
  noMoreCards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})