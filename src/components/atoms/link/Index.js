import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {fonts} from '../../../utils';
import {colors} from '../../../utils/colors';

const Link = ({title, size, align}) => {
  return (
    <View>
      <Text style={styles.Text(size, align)}>{title}</Text>
    </View>
  );
};

export default Link;

const styles = StyleSheet.create({
  Text: (size, align) => ({
    fontSize: size,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    textDecorationLine: 'underline',
    textAlign: align,
  }),
});
