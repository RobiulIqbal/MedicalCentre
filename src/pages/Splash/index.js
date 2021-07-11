import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILDMC1} from '../../assets';
import {colors} from '../../utils/colors';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Get Started');
    }, 3000);
  }, [navigation]);
  return (
    <View style={styles.page}>
      <ILDMC1 />
      <Text style={styles.title}>Medical Centre</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.splash,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Nunito-SemiBold',
    color: colors.text.primary,
    marginTop: 20,
  },
});
