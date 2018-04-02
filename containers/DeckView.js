import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text } from 'react-native';
import { black, white, gray } from '../utils/colors';
import ButtonsGroup from '../components/ButtonsGroup';

class DeckView extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.title}`,
  });

  handleAddCard = () => {
    const { navigation, title } = this.props;

    navigation.navigate(
        'AddCard',
        { deckKey: title }
    );
  };

  handleStartQuiz = () => {
    const { navigation, title } = this.props;

    navigation.navigate(
        'QuizView',
        { deckKey: title }
    );
  };

  render() {
    const { title, cardsCount } = this.props;
    const submitOpacity = (cardsCount === 0) ? 0.2 : 1;

    return (
      <View style={styles.container}>
        <View style={styles.titleCardsGroup}>
          <Text style={styles.title}>
            {title}
          </Text>
          <Text style={styles.cardsCount}>
            {cardsCount} cards
          </Text>
        </View>
        <ButtonsGroup
          btnTxt1="Add Card"
          btnTxtColor1={black}
          btnBackgroundColor1={white}
          btnHandle1={this.handleAddCard}
          borderWidth1={2}
          btnTxt2="Start Quiz"
          btnTxtColor2={white}
          btnBackgroundColor2={black}
          btnHandle2={this.handleStartQuiz}
          disabled2={cardsCount === 0}
          opacity2={submitOpacity}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: white,
  },
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
  titleCardsGroup: {
    flex:1,
    justifyContent: 'center',
  },
});

const mapStateToProps = (state, ownProps) => {
  const { title } = ownProps.navigation.state.params;
  return {
    title,
    cardsCount: (state[title]['questions'])
      ? state[title]['questions'].length
      : 0,
  };
};

export default connect(mapStateToProps)(DeckView);
