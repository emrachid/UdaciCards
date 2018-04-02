import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { black, gray } from '../utils/colors';

const Deck = ({ title, cardsCount }) => (
  <View>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.cardsCount}>{cardsCount} cards</Text>
  </View>
);

export const styles = StyleSheet.create({
  title: {
    fontSize: 35,
    color: black,
    textAlign: 'center',
  },
  cardsCount: {
    fontSize: 25,
    color: gray,
    textAlign: 'center',
  },
});

export default Deck;
