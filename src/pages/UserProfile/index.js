import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {Gap} from '../../components/atoms';
import {Header, List, Profile} from '../../components/moleculs';
import {Firebase} from '../../config';
import {colors, getData} from '../../utils';

const UserProfile = ({navigation}) => {
  const [profile, setProfile] = useState({
    fullName: '',
    profesi: '',
    photo: '',
  });
  useEffect(() => {
    getData('user').then(res => {
      const data = res;
      data.photo = {uri: res.photo};
      setProfile(data);
    });
  });

  const signOut = () => {
    Firebase.auth()
      .signOut()
      .then(res => {
        console.log('Berhasil Sign Out');
        navigation.replace('Get Started');
      })
      .catch(err => {
        showMessage({
          message: err.message,
          type: 'default',
          backgroundColor: colors.erorrmassage,
          color: colors.white,
        });
      });
  };

  return (
    <View style={styles.page}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <Gap height={20} />
      {profile.fullName.length > 0 && (
        <Profile
          nama={profile.fullName}
          desc={profile.profesi}
          photo={profile.photo}
        />
      )}
      <Gap height={15} />
      <List
        nama="Edit Profile"
        desc="Last Update Yesterday"
        type="Next"
        icon="edit-profile"
        onPress={() => navigation.navigate('UpdateProfile')}
      />
      <List
        nama="Langguage"
        desc="Last Update Yesterday"
        type="Next"
        icon="langguage"
      />
      <List
        nama="Give Us Rate"
        desc="Last Update Yesterday"
        type="Next"
        icon="rate"
      />
      <List
        nama="Sign Out"
        desc="Last Update Yesterday"
        type="Next"
        icon="help"
        onPress={signOut}
      />
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: colors.white},
});
