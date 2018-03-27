import React from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { clearLocalNotification, setLocalNotification } from '../utils/notification';
import { white, red, green, black } from '../utils/colors';
import ButtonsGroup from '../components/ButtonsGroup';

class QuizView extends React.Component {
  state = {
    showAnswer: false,
    questionIndex: 0,
    correctAnswers: 0,
    quizCompleted: false,
  };

  handleToggleShowAnswer = () => {this.setState({showAnswer: !this.state.showAnswer})};

  handleCorrect = () => {
    const { questionIndex, correctAnswers } = this.state;
    const { questions } = this.props;

    if (questionIndex >= questions.length - 1) {
      this.setState({
        correctAnswers: correctAnswers + 1,
        quizCompleted: true,
      });
      // clear notification if at least one quiz is completed that day
      clearLocalNotification().then(setLocalNotification);
    }
    else {
      this.setState({
        correctAnswers: correctAnswers + 1,
        questionIndex: questionIndex + 1,
        showAnswer: false,
      });
    }
  };

  handleIncorrect = () => {
    const { questionIndex } = this.state;
    const { questions } = this.props;

    if (questionIndex >= questions.length - 1) {
      this.setState({ quizCompleted: true });
      // clear notification if at least one quiz is completed that day
      clearLocalNotification().then(setLocalNotification);
    }
    else {
      this.setState({
        questionIndex: questionIndex + 1,
        showAnswer: false,
      });
    }
  };

  handleRestart = () => {
    this.setState({
      showAnswer: false,
      questionIndex: 0,
      correctAnswers: 0,
      quizCompleted: false,
    });
  };

  handleBack = () => {
    this.props.navigation.goBack();
  }

  render() {
    const { questionIndex, showAnswer, quizCompleted, correctAnswers } = this.state;
    const { questions } = this.props;

    if (quizCompleted) {
      return (
        <View style={styles.container}>
          <View style={styles.body}>
            <Text style={styles.bodyTxt1}>Quiz completed!!!</Text>
            <Text style={styles.bodyTxt2}>{correctAnswers/questions.length*100}% corrected answers</Text>
          </View>
          <ButtonsGroup
            btnTxt1="Restart"
            btnTxtColor1={black}
            btnBackgroundColor1={white}
            btnHandle1={this.handleRestart}
            borderWidth1={2}
            btnTxt2="Back"
            btnTxtColor2={white}
            btnBackgroundColor2={black}
            btnHandle2={this.handleBack}
          />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTxt}>{questionIndex + 1}/{questions.length}</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.bodyTxt1}>
            {(showAnswer)
              ? (questions[questionIndex]['answer'])
              : (questions[questionIndex]['question'])}
          </Text>
          <TouchableOpacity
            onPress={this.handleToggleShowAnswer}>
            <Text style={styles.bodyTxt2}>
              {(!showAnswer)
                ? ('Answer')
                : ('Question')}
            </Text>
          </TouchableOpacity>
        </View>
        <ButtonsGroup
          btnTxt1="Correct"
          btnTxtColor1={white}
          btnBackgroundColor1={green}
          btnHandle1={this.handleCorrect}
          btnTxt2="Incorrect"
          btnTxtColor2={white}
          btnBackgroundColor2={red}
          btnHandle2={this.handleIncorrect}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: white,
  },
  header: {
    alignSelf: 'flex-start',
    padding: 20,
  },
  headerTxt: {
    fontSize: 25,
  },
  body:{

  },
  bodyTxt1: {
    fontSize: 35,
    textAlign: 'center',
    padding: 10,
  },
  bodyTxt2: {
    fontSize: 25,
    textAlign: 'center',
    color: red,
  },
});

const mapStateToProps = (state, ownProps) => {
  const { deckKey } = ownProps.navigation.state.params;
  return {
    questions: state[deckKey]['questions'],
  };
};

export default connect(mapStateToProps)(QuizView);
