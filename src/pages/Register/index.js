import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, Input, Header, Gap} from '../../components';
import {colors} from '../../utils';

const Register = ({navigation}) => {
  const [fullName, setFullName] = useState('');
  const [profesi, setProfesi] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onContinue = () => {
    console.log('coba fungsi onContinue');
    // () => navigation.navigate('UploadPhoto')
  };

  return (
    <View style={styles.page}>
      <Header onPress={() => navigation.goBack()} title="Daftar Akun" />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Input label="Full Name" />
          <Gap height={24} />
          <Input label="Pekerjaan" />
          <Gap height={24} />
          <Input label="Email" />
          <Gap height={24} />
          <Input label="Password" />
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
