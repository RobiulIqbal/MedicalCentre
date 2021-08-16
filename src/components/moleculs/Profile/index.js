import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {DummyUser, IconRemovePhoto} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Profile = ({nama, desc, isRemove, photo, onPress}) => {
  return (
    <View style={styles.container}>
      {!isRemove && (
        <View style={styles.borderList}>
          <Image source={photo} style={styles.avatar} />
        </View>
      )}
      {isRemove && (
        <TouchableOpacity style={styles.borderList} onPress={onPress}>
          <Image source={photo} style={styles.avatar} />
          {isRemove && <IconRemovePhoto style={styles.removePhoto} />}
        </TouchableOpacity>
      )}
      {nama && (
        <View style={styles.content}>
          <Text style={styles.nama}>{nama}</Text>
          <Text style={styles.profesi}>{desc}</Text>
        </View>
      )}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {alignItems: 'center', justifyContent: 'center'},
  content: {alignItems: 'center', justifyContent: 'center'},
  avatar: {width: 110, height: 110, borderRadius: 110 / 2},
  borderList: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    borderWidth: 1,
    borderColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nama: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 16,
    textAlign: 'center',
  },
  profesi: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    color: colors.text.secondary,
    marginTop: 2,
    textAlign: 'center',
  },
  removePhoto: {position: 'absolute', right: 8, bottom: 8},
});
