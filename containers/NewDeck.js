import React from 'react';
import { connect } from 'react-redux';
import { Text, TextInput } from 'react-native';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import { saveDeckTitle } from '../utils/api';
import { addDeck } from '../actions';
import { black, white, gray } from '../utils/colors';
import Button from '../components/Button';

class NewDeck extends React.Component {
  state = {
    titleTxt: '',
  };

  handleSubmit = () => {
    const title = this.state.titleTxt.trim();
    if (!title) {
      alert('Title cannot be empty');
      return;
    }
    saveDeckTitle(title)
      .then(this.props.dispatch(addDeck(title)));

    this.props.navigation.navigate(
        'DeckView',
        { title }
    );

    this.setState({ titleTxt: ''});
  };

  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <Text style={styles.label}>What is the title of your new deck?</Text>
        <TextInput
          style={styles.inputTxt}
          onChangeText={(titleTxt) => this.setState({titleTxt})}
          value={this.state.titleTxt}
          placeholderTextColor={gray}
          placeholder="Deck title"
        />
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
    fontSize: 35,
    paddingLeft: 50,
    paddingRight: 50,
    textAlign: 'center',
  },
  inputTxt: {
    fontSize: 20,
    borderWidth: 1,
    borderColor: black,
    borderRadius: 5,
    height: 50,
    alignSelf: 'stretch',
    marginLeft: 50,
    marginRight: 50,
    padding:10,
  },
});

export default connect()(NewDeck);
