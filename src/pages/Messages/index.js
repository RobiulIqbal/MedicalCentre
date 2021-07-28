import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DummyDoctor1, DummyDoctor2, DummyDoctor3} from '../../assets';
import {List} from '../../components';
import {colors, fonts} from '../../utils';

const Massages = ({navigation}) => {
  const [Doctors] = useState([
    {
      key: 1,
      profile: DummyDoctor3,
      nama: 'Faridah Husnatul',
      desc: 'iya dok terimakasi atas masukanya',
    },
    {
      key: 2,
      profile: DummyDoctor2,
      nama: 'Husnatul',
      desc: 'iya dok ....',
    },
    {
      key: 3,
      profile: DummyDoctor1,
      nama: 'Marah husna',
      desc: 'iya gitu aja .....',
    },
  ]);
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.title}>Massages</Text>
        {Doctors.map(doctor => {
          return (
            <List
              key={doctor.key}
              profile={doctor.profile}
              nama={doctor.nama}
              desc={doctor.desc}
              onPress={() => navigation.navigate('Chatting')}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Massages;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  container: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginLeft: 16,
  },
});
