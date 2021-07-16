import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconBackDark} from '../../../assets';
import {colors, fonts} from '../../../utils';
import {Button, Gap} from '../../atoms';

const Header = ({onPress, title}) => {
  return (
    <View style={styles.Header}>
      {/* <IconBackDark /> */}
      <Button type="icon-only" icon="back-dark" onPress={onPress} />
      <Text style={styles.Text}>{title}</Text>
      <Gap width={24} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  Header: {
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
  },
  Text: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
    flex: 1,
    color: colors.text.primary,
  },
});
