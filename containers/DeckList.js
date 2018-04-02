import React from 'react';
import { connect } from 'react-redux'
import { StyleSheet, View, FlatList } from 'react-native';
import { ActivityIndicator, TouchableHighlight } from 'react-native';
import { gray, lightGray, white } from '../utils/colors';
import { getDecks } from '../utils/api';
import Deck from '../components/Deck';
import { receiveDecks } from '../actions';

class DeckList extends React.Component {
  state = {
    ready: false,
  };

  componentDidMount() {
    getDecks()
      .then((decks) => this.props.dispatch(receiveDecks(decks)))
      .then(() => this.setState(() => ({
        ready: true,
      })));
  };

  onPress = (item) => (
    this.props.navigation.navigate(
        'DeckView',
        {
          title: item.key,
          transition: 'openDeckView',
        }
    )
  );

  renderItem = ({ item }) => (
    <TouchableHighlight
      style={styles.item}
      onPress={() => this.onPress(item)}
      underlayColor={lightGray}>
      <Deck title={item.key} cardsCount={item.cardsCount}/>
    </TouchableHighlight>
  );

  renderSeparator = () => (
    <View style={styles.separator} />
  );

  render() {
    return (this.state.ready) ? (
      <View style={styles.container}>
        <FlatList
          data={this.props.decks}
          renderItem={this.renderItem}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </View>
    ) : (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color={gray} />
      </View>
    )
  };
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: gray,
    backgroundColor: white,
  },
  item: {
    padding: 50,
  },
  separator: {
    height: 1,
    backgroundColor: gray,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
  }
});

const mapStateToProps = (state, ownProps) => {
  return {
    decks: Object.keys(state).map((deckId) => ({
      key: state[deckId]['title'],
      cardsCount: (state[deckId]['questions'])
      ? (state[deckId]['questions'].length)
      : (0),
    })),
  }
};

export default connect(mapStateToProps)(DeckList);
