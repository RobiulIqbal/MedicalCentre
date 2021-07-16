import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILDMC1} from '../../assets/illustration';
import {Button, Gap, Input, Link} from '../../components';
import {colors, fonts} from '../../utils';

const Login = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ILDMC1 />
      <Text style={styles.title}>Masuk dan Mulai Konsultasi</Text>
      <Input label="Email Address" />
      <Gap height={24} />
      <Input label="Password" />
      <Gap height={10} />
      <Link title="Forgot My Password" size={12} />
      <Gap height={40} />
      <Button title="Sign In" onPress={() => navigation.replace('MainApp')} />
      <Gap height={30} />
      <Link title="Create New Account" size={16} align="center" />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {padding: 40, flex: 1, backgroundColor: colors.white},
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    marginTop: 40,
    marginBottom: 40,
    maxWidth: 155,
    color: colors.text.primary,
  },
});
