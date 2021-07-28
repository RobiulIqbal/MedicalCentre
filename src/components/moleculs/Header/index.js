import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconBackDark} from '../../../assets';
import {colors, fonts} from '../../../utils';
import {Button, Gap} from '../../atoms';
import DarkProfile from './DarkProfile';

const Header = ({onPress, title, type}) => {
  if (type === 'dark-profile') {
    return <DarkProfile onPress={onPress} />;
  }
  return (
    <View style={styles.Header(type)}>
      <Button
        type="icon-only"
        icon={type === 'dark' ? 'back-light' : 'back-dark'}
        onPress={onPress}
      />
      <Text style={styles.Text(type)}>{title}</Text>
      <Gap width={24} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  Header: type => ({
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: type === 'dark' ? colors.secondary : colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomLeftRadius: type === 'dark' ? 20 : 0,
    borderBottomRightRadius: type === 'dark' ? 20 : 0,
  }),
  Text: type => ({
    fontSize: 16,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
    flex: 1,
    color: type === 'dark' ? colors.white : colors.text.primary,
  }),
});
