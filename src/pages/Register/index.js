import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {Button, Input, Header, Gap, Loading} from '../../components';
import {Firebase} from '../../config';
import {
  colors,
  getData,
  storeData,
  useForm,
  showErr,
  showSuccess,
} from '../../utils';

const Register = ({navigation}) => {
  const [form, setForm] = useForm({
    fullName: '',
    profesi: '',
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const onContinue = () => {
    dispatch({type: 'SET_LOADING', value: true});
    Firebase.auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then(success => {
        // Signed in
        dispatch({type: 'SET_LOADING', value: false});
        setForm('reset');
        const data = {
          fullName: form.fullName,
          profesi: form.profesi,
          email: form.email,
          uid: success.user.uid,
        };
        Firebase.database()
          .ref('users/' + success.user.uid + '/')
          .set(data);
        storeData('user', data);
        navigation.navigate('UploadPhoto', data);
        showSuccess('Berhasil Daftar');
        // ...
      })
      .catch(error => {
        const errorMessage = error.message;
        dispatch({type: 'SET_LOADING', value: false});
        showErr(errorMessage);
        // ..
      });
  };

  return (
    <View style={styles.page}>
      <Header onPress={() => navigation.goBack()} title="Daftar Akun" />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Input
            label="Full Name"
            value={form.fullName}
            onChangeText={value => setForm('fullName', value)}
          />
          <Gap height={24} />
          <Input
            label="Pekerjaan"
            value={form.profesi}
            onChangeText={value => setForm('profesi', value)}
          />
          <Gap height={24} />
          <Input
            label="Email"
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
          <Gap height={40} />
          <Button title="Continue" onPress={onContinue} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    padding: 40,
    paddingTop: 0,
  },
});
