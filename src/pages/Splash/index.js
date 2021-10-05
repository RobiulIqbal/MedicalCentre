import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILDMC1} from '../../assets';
import {Firebase} from '../../config';
import {fonts} from '../../utils';
import {colors} from '../../utils/colors';

const Splash = ({navigation}) => {
  useEffect(() => {
    const bugRegister = Firebase.auth().onAuthStateChanged(user => {
      setTimeout(() => {
        if (user) {
          //Jika Masih dalam keadaan login
          navigation.replace('MainApp');
        } else {
          //Jika sudah dalam keadaaan logout
          navigation.replace('Get Started');
        }
      }, 3000);
    });
    return () => bugRegister();
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
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 20,
  },
});
