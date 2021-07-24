import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ChattItem, Header, InputChat} from '../../components/moleculs';
import {colors, fonts} from '../../utils';

const Chatting = () => {
  return (
    <View style={styles.page}>
      <Header type="dark-profile" title="Faridah Husnatul" />
      <View style={styles.content}>
        <Text style={styles.Chatdate}>Senin, 21 Maret, 2020</Text>
        <ChattItem isMe />
        <ChattItem />
        <ChattItem isMe />
      </View>
      <InputChat />
    </View>
  );
};

export default Chatting;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  Chatdate: {
    fontSize: 12,
    fontFamily: fonts.primary.normal,
    marginVertical: 20,
    color: colors.text.secondary,
    textAlign: 'center',
  },
  content: {flex: 1},
});
