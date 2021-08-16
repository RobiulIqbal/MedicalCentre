import React, {useState} from 'react';
import {StyleSheet, Text, ScrollView} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {ILDMC1} from '../../assets/illustration';
import {Button, Gap, Input, Link, Loading} from '../../components';
import {Firebase} from '../../config';
import {colors, fonts, storeData, useForm} from '../../utils';

const Login = ({navigation}) => {
  const [form, setForm] = useForm({email: '', password: ''});
  const [loading, setLoading] = useState(false);

  const login = () => {
    console.log('form: ', form);
    setLoading(true);
    Firebase.auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then(res => {
        console.log('success ', res);
        setLoading(false);
        Firebase.database()
          .ref(`users/${res.user.uid}/`)
          .once('value')
          .then(resDB => {
            console.log('data user: ', resDB.val());
            if (resDB.val()) {
              storeData('user', resDB.val());
              navigation.replace('MainApp');
            }
          });

        showMessage({
          message: 'Login Berhasil',
          type: 'default',
          backgroundColor: colors.succesmassage,
          color: colors.white,
        });
      })
      .catch(err => {
        console.log('error: ', err);
        setLoading(false);
        showMessage({
          message: err.message,
          type: 'default',
          backgroundColor: colors.erorrmassage,
          color: colors.white,
        });
      });
  };
  return (
    <>
      <ScrollView style={styles.page} showsVerticalScrollIndicator={false}>
        <ILDMC1 />
        <Text style={styles.title}>Masuk dan Mulai Konsultasi</Text>
        <Input
          label="Email Address"
          value={form.email}
          onChangeText={value => setForm('email', value)}
        />
        <Gap height={24} />
        <Input
          label="Password"
          value={form.password}
          onChangeText={value => setForm('password', value)}
          secureTextEntry
        />
        <Gap height={10} />
        <Link title="Forgot My Password" size={12} />
        <Gap height={40} />
        <Button title="Sign In" onPress={login} />
        <Gap height={30} />
        <Link
          title="Create New Account"
          size={16}
          align="center"
          onPress={() => navigation.navigate('Register')}
        />
      </ScrollView>
      {loading && <Loading />}
    </>
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
