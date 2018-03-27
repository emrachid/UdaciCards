import { StyleSheet } from 'react-native';
import { black, gray, white } from '../utils/colors';

export const CommonStyles = StyleSheet.create({
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
  btn: {
    backgroundColor: white,
    borderColor: black,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 45,
    paddingRight: 45,
  },
  btnTxt: {
    color: black,
    textAlign: 'center',
    fontSize: 25,
  },
  btnGroup: {
    flex:1,
    justifyContent: 'flex-end',
    padding:20,
  },
  spaceBetweenBtns: {
    padding:5,
  },
});
