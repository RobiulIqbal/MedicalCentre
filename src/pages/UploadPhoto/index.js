import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {IconAddPhoto, IconRemovePhoto, ILNulPhoto} from '../../assets';
import {Button, Gap, Header, Link} from '../../components';
import {Firebase} from '../../config';
import {colors, fonts, storeData, showErr} from '../../utils';

const UploadPhoto = ({navigation, route}) => {
  const {fullName, profesi, uid} = route.params;
  const [photoForDb, setPhotoForDb] = useState('');
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photo, setPhoto] = useState(ILNulPhoto);
  const getImage = () => {
    launchImageLibrary(
      {quality: 0.5, maxWidth: 200, maxHeight: 200, includeBase64: true},
      response => {
        if (response.didCancel || response.error) {
          showErr('oops!, sepertinya anda belum memilih fotonya?');
        } else {
          setPhotoForDb(
            `data:${response.assets[0].type};base64, ${response.assets[0].base64}`,
          );
          const source = {uri: response.assets[0].uri};
          setPhoto(source);
          setHasPhoto(true);
        }
      },
    );
  };

  const uploadAndContinue = () => {
    Firebase.database()
      .ref('users/' + uid + '/')
      .update({photo: photoForDb});

    const data = route.params;
    data.photo = photoForDb;

    storeData('user', data);

    navigation.replace('MainApp');
  };
  return (
    <View style={styles.page}>
      <Header title="Upload Photo" />
      <View style={styles.content}>
        <View style={styles.profile}>
          <TouchableOpacity style={styles.AvatarWrapper} onPress={getImage}>
            <Image source={photo} style={styles.Avatar} />
            {!hasPhoto && <IconAddPhoto style={styles.addPhoto} />}
            {hasPhoto && <IconRemovePhoto style={styles.addPhoto} />}
          </TouchableOpacity>
          <Text style={styles.nama}>{fullName}</Text>
          <Text style={styles.profesi}>{profesi}</Text>
        </View>
        <View>
          <Button
            disable={!hasPhoto}
            title="Upload And Continue"
            onPress={uploadAndContinue}
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
  Avatar: {width: 110, height: 110, borderRadius: 110 / 2},
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
