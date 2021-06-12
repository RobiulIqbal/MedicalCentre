import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILlogo} from '../../assets/illustration';

const Splash = () => {
  return (
    <View style={styles.page}>
      <ILlogo />
      <Text style={styles.title}>Medical Centre</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#E5E5E5',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#112340',
    marginTop: 20,
  },
});
