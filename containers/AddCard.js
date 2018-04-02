import React from 'react';
import { connect } from 'react-redux';
import { Text, TextInput, View } from 'react-native';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import { addCardToDeck } from '../utils/api';
import { addCard } from '../actions';
import { black, white, gray } from '../utils/colors';
import Button from '../components/Button';

class AddCard extends React.Component {
  state = {
    question: '',
    answer: '',
  };

  handleSubmit = () => {
    const { deckKey } = this.props.navigation.state.params;

    let errorMessage = '';
    const question = this.state.question.trim();
    if (!question) {
      errorMessage += 'Question cannot be empty. ';
    }

    const answer = this.state.answer.trim();
    if (!answer) {
      errorMessage += 'Answer cannot be empty.';
    }

    if (errorMessage) {
      alert(errorMessage);
      return;
    }

    const questions = (this.props.questions)
                        ? [ ...this.props.questions, { question, answer }]
                        : [{ question, answer }]

    addCardToDeck(deckKey, questions)
      .then(this.props.dispatch(addCard(deckKey, question, answer)));

    this.props.navigation.goBack();
  };

  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View style={styles.group}>
          <Text style={styles.label}>What is the question of your new card?</Text>
          <TextInput
            style={styles.inputTxt}
            onChangeText={(question) => this.setState({question})}
            value={this.state.question}
            placeholderTextColor={gray}
            placeholder="Card question"
          />
        </View>
        <View>
          <Text style={styles.label}>What is the answer of your new card?</Text>
          <TextInput
            style={styles.inputTxt}
            onChangeText={(answer) => this.setState({answer})}
            value={this.state.answer}
            placeholderTextColor={gray}
            placeholder="Card answer"
          />
        </View>
        <Button
          btnTxtColor={white}
          btnBackgroundColor={black}
          btnHandle={this.handleSubmit}>
          Submit
        </Button>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: white,
  },
  label: {
    fontSize: 20,
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: 'center',
    paddingBottom: 10,
  },
  inputTxt: {
    fontSize: 20,
    borderWidth: 1,
    borderColor: black,
    borderRadius: 5,
    height: 50,
    alignSelf: 'stretch',
    marginLeft: 20,
    marginRight: 20,
    padding:10,
  },
});

const mapStateToProps = (state, ownProps) => ({
  questions: state[ownProps.navigation.state.params.deckKey]['questions'],
});

export default connect(mapStateToProps)(AddCard);
