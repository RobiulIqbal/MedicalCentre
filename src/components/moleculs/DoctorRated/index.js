import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {DummyDoctor1} from '../../../assets/dummy';
import {IconStar} from '../../../assets/icon';
import {fonts, colors} from '../../../utils';

const DoctorRated = ({nama, desc, avatar, onPress}) => {
  return (
    <TouchableOpacity style={styles.content} onPress={onPress}>
      <Image source={avatar} style={styles.avatar} />
      <View style={styles.textWrapper}>
        <Text style={styles.nama}>{nama}</Text>
        <Text style={styles.label}>{desc}</Text>
      </View>
      <View style={styles.rate}>
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
      </View>
    </TouchableOpacity>
  );
};

export default DoctorRated;

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    alignItems: 'center',
  },
  avatar: {width: 50, height: 50, borderRadius: 50 / 2, marginRight: 12},
  rate: {flexDirection: 'row', alignItems: 'center'},
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
