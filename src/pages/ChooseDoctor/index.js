import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  DummyDoctor3,
  DummyDoctor4,
  DummyDoctor5,
  DummyDoctor6,
  DummyDoctor7,
  DummyDoctor8,
} from '../../assets';
import {Header, List} from '../../components';
import {colors} from '../../utils';

const ChooseDoctor = ({navigation}) => {
  return (
    <View style={styles.content}>
      <Header
        type="dark"
        title="Pilih Dokter Anak"
        onPress={() => navigation.goBack()}
      />
      <List
        type="Next"
        profile={DummyDoctor4}
        nama="Faridah Husnatul"
        desc="Wanita"
        onPress={() => navigation.navigate('Chatting')}
      />
      <List
        type="Next"
        profile={DummyDoctor5}
        nama="Faridah Husnatul"
        desc="Wanita"
      />
      <List
        type="Next"
        profile={DummyDoctor6}
        nama="Faridah Husnatul"
        desc="Wanita"
      />
      <List
        type="Next"
        profile={DummyDoctor7}
        nama="Faridah Husnatul"
        desc="Wanita"
      />
      <List
        type="Next"
        profile={DummyDoctor8}
        nama="Faridah Husnatul"
        desc="Wanita"
      />
    </View>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({
  content: {backgroundColor: colors.white, flex: 1},
});
