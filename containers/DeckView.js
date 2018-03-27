import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text } from 'react-native';
import { CommonStyles } from '../components/CommonStyles';
import { black, white } from '../utils/colors';
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
        <View style={CommonStyles.titleCardsGroup}>
          <Text style={CommonStyles.title}>
            {title}
          </Text>
          <Text style={CommonStyles.cardsCount}>
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
