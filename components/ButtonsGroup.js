import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from './Button';

const ButtonsGroup = ({
  btnTxt1,
  btnTxtColor1,
  btnBackgroundColor1,
  btnHandle1,
  borderWidth1,
  btnTxt2,
  btnTxtColor2,
  btnBackgroundColor2,
  btnHandle2,
  disabled2,
  opacity2,
}) => (
  <View style={styles.btnGroup}>
    <Button
      btnTxtColor={btnTxtColor1}
      btnBackgroundColor={btnBackgroundColor1}
      btnHandle={btnHandle1}
      borderWidth={borderWidth1}>
      {btnTxt1}
    </Button>
    <View style={styles.spaceBetweenBtns} />
    <Button
      btnTxtColor={btnTxtColor2}
      btnBackgroundColor={btnBackgroundColor2}
      btnHandle={btnHandle2}
      disabled={disabled2}
      opacity={opacity2}>
      {btnTxt2}
    </Button>
  </View>
);

const styles = StyleSheet.create({
  btnGroup: {
    justifyContent: 'flex-end',
    padding:20,
  },
  spaceBetweenBtns: {
    padding:5,
  },
});

export default ButtonsGroup;
