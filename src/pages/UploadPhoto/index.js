import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {IconAddPhoto, ILNulPhoto} from '../../assets';
import {Button, Gap, Header, Link} from '../../components';
import {colors, fonts} from '../../utils';

const UploadPhoto = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Upload Photo" />
      <View style={styles.content}>
        <View style={styles.profile}>
          <View style={styles.AvatarWrapper}>
            <Image source={ILNulPhoto} style={styles.Avatar} />
            <IconAddPhoto style={styles.addPhoto} />
          </View>
          <Text style={styles.nama}>Irob Leboq</Text>
          <Text style={styles.profesi}>Full Stack React Native</Text>
        </View>
        <View>
          <Button
            title="Upload And Continue"
            onPress={() => navigation.replace('MainApp')}
          />
          <Gap height={30} />
          <Link
            title="Skip for This"
            align="center"
            size={16}
            onPress={() => navigation.replace('MainApp')}
          />
        </View>
      </View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    paddingHorizontal: 40,
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 60,
  },
  profile: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  AvatarWrapper: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Avatar: {width: 110, height: 110},
  addPhoto: {position: 'absolute', bottom: 8, right: 8},
  nama: {
    fontSize: 24,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
    color: colors.text.primary,
  },
  profesi: {
    fontSize: 18,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    textAlign: 'center',
    marginTop: 6,
  },
});
