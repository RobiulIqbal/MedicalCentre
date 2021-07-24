import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Gap} from '../../components/atoms';
import {Header, List, Profile} from '../../components/moleculs';
import {colors} from '../../utils';

const UserProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Profile" />
      <Gap height={20} />
      <Profile nama="Irob Leboq" desc="React Native Developer" />
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
        nama="Help Center"
        desc="Last Update Yesterday"
        type="Next"
        icon="help"
      />
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: colors.white},
});
