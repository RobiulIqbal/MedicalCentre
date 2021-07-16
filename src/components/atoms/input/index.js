import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const Input = ({label}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.Input} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  Input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    padding: 12,
  },
  label: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    marginBottom: 6,
    color: colors.text.secondary,
  },
});
