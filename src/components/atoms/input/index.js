import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const Input = ({label}) => {
  const [border, setBorder] = useState();
  const onFocusForm = () => {
    setBorder(colors.tertiary);
  };
  const onBlurForm = () => {
    setBorder(colors.border);
  };
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        onFocus={onFocusForm}
        onBlur={onBlurForm}
        style={styles.Input(border)}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  Input: border => ({
    borderWidth: 1,
    borderColor: border,
    borderRadius: 10,
    padding: 12,
  }),
  label: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    marginBottom: 6,
    color: colors.text.secondary,
  },
});
