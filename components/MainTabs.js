import React from 'react';
import { Platform } from 'react-native';
import { TabNavigator } from 'react-navigation';
import DeckList from '../containers/DeckList';
import NewDeck from '../containers/NewDeck';
import { black, white, gray } from '../utils/colors';

const MainTabs = TabNavigator({
  Decks: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'DECKS',
    },
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'NEW DECK'
    },
  },
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? black : white,
    inactiveTintColor: gray,
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? white : black,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1,
    },
  },
});

export default MainTabs;
