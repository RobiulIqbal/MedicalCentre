import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, Profile, ProfileItem} from '../../components';
import {colors} from '../../utils';

const DokterProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Doctor Profile" onPress={() => navigation.goBack()} />
      <Profile nama="Koro Sensei" desc="Dokter Gurita" />
      <Gap height={10} />
      <ProfileItem label="Alumnus" value="UNIDA 2021" />
      <ProfileItem label="Tempat Praktek" value="Rumah Sakit Yasfin, Gontor" />
      <ProfileItem label="No STR" value="0000116622081996" />
      <View style={styles.action}>
        <Button
          title="Start Consultation"
          onPress={() => navigation.navigate('Chatting')}
        />
      </View>
    </View>
  );
};

export default DokterProfile;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  action: {paddingHorizontal: 40, paddingTop: 23},
});
