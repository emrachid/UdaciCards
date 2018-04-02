import React from 'react';
import { StackNavigator } from 'react-navigation';
import MainTabs from './MainTabs';
import DeckView from '../containers/DeckView';
import QuizView from '../containers/QuizView';
import AddCard from '../containers/AddCard';
import { black, white } from '../utils/colors';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';

const MainNavigator = StackNavigator({
  Home: {
    screen: MainTabs,
  },
  DeckView: {
    screen: DeckView,
    navigationOptions : {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: black,
      }
    },
  },
  AddCard: {
    screen: AddCard,
    navigationOptions : {
      title: 'Add Card',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: black,
      }
    },
  },
  QuizView: {
    screen: QuizView,
    navigationOptions : {
      title: 'Quiz',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: black,
      }
    },
  },
},{
  mode: 'card',
  headerMode: 'screen',
  gesturesEnabled: true,
  transitionConfig: (sceneProps) => {
    const params = sceneProps.scene.route.params || {};
    const transition = params.transition || 'default';

    if (transition === 'openDeckView') {
      return {
        screenInterpolator: CardStackStyleInterpolator.forHorizontal,
      }
    }

    return {};
  },
});

export default MainNavigator;
