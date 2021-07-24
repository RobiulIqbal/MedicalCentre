import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {
  DummyHospital1,
  DummyHospital2,
  DummyHospital3,
  ILBGHospital,
} from '../../assets';
import {ListHospital} from '../../components';
import {colors, fonts} from '../../utils';

const Hospitals = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={ILBGHospital} style={styles.background}>
        <Text style={styles.title}>Nearby Hospital</Text>
        <Text style={styles.desc}>3 Hospital</Text>
      </ImageBackground>
      <View style={styles.content}>
        <ListHospital
          pic={DummyHospital1}
          type="Rumah Sakit"
          name="Haryunu Hospital"
          address="Jln. Cempluk Imut-Imut no.23"
        />
        <ListHospital
          pic={DummyHospital2}
          type="Rumah Sakit Anak"
          name="Janji Hospital"
          address="Jln. Cempluk Imut-Imut no.34"
        />
        <ListHospital
          pic={DummyHospital3}
          type="Rumah Sakit Jiwa"
          name="Leasing Hospital"
          address="Jln. Cempluk Imut-Imut no.54"
        />
      </View>
    </View>
  );
};

export default Hospitals;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.secondary, flex: 1},
  background: {height: 240, paddingTop: 30},
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.white,
    textAlign: 'center',
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.primary[300],
    color: colors.white,
    textAlign: 'center',
    marginTop: 6,
  },
  content: {
    backgroundColor: colors.white,
    borderRadius: 30,
    flex: 1,
    marginTop: -30,
    paddingTop: 14,
  },
});
