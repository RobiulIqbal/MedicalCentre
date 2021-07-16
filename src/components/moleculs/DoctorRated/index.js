import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyDoctor1} from '../../../assets/dummy';
import {IconStar} from '../../../assets/icon';
import {fonts, colors} from '../../../utils';

const DoctorRated = () => {
  return (
    <View style={styles.content}>
      <Image source={DummyDoctor1} style={styles.avatar} />
      <View style={styles.textWrapper}>
        <Text style={styles.nama}>Faridah Husnatul</Text>
        <Text style={styles.label}>Dokter Psikiater</Text>
      </View>
      <View style={styles.rate}>
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
      </View>
    </View>
  );
};

export default DoctorRated;

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  avatar: {width: 50, height: 50, borderRadius: 50 / 2, marginRight: 12},
  rate: {flexDirection: 'row'},
  textWrapper: {flex: 1},
  nama: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  label: {
    fontSize: 12,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginTop: 2,
  },
});
