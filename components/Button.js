import React from 'react';
import { Animated, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { white, black } from '../utils/colors';

const Button = ({
  btnTxtColor,
  btnBackgroundColor,
  btnHandle,
  disabled,
  opacity,
  borderWidth,
  children,
}) => (
  <Animated.View style={{ opacity }}>
    <TouchableOpacity
      style={[styles.btn, {
        backgroundColor: btnBackgroundColor,
        borderWidth: borderWidth,
      }]}
      onPress={btnHandle}
      disabled={disabled}>
      <Text style={[styles.btnTxt, {color: btnTxtColor}]}>
        {children}
      </Text>
    </TouchableOpacity>
  </Animated.View>
);

const styles = StyleSheet.create({
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
});

export default Button;
