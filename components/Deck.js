import React from 'react';
import { Text, View } from 'react-native';
import { CommonStyles } from './CommonStyles';

const Deck = ({ title, cardsCount }) => (
  <View>
    <Text style={CommonStyles.title}>{title}</Text>
    <Text style={CommonStyles.cardsCount}>{cardsCount} cards</Text>
  </View>
);

export default Deck;
