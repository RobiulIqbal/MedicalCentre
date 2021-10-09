import React, {useEffect, useState} from 'react';
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
import {Firebase} from '../../config';
import {colors} from '../../utils';

const ChooseDoctor = ({navigation, route}) => {
  const [listDoctors, setListDoctors] = useState([]);
  const itemCategory = route.params;
  useEffect(() => {
    callDoctorByCategory(itemCategory.category);
  }, [itemCategory.category]);

  const callDoctorByCategory = category => {
    Firebase.database()
      .ref('doctors/')
      .orderByChild('category')
      .equalTo(category)
      .once('value')
      .then(res => {
        if (res.val()) {
          const oldData = res.val();
          const data = [];
          Object.keys(oldData).map(item => {
            data.push({
              id: item,
              data: oldData[item],
            });
          });
          setListDoctors(data);
        }
      });
  };
  return (
    <View style={styles.content}>
      <Header
        type="dark"
        title={`Pilih ${itemCategory.category}`}
        onPress={() => navigation.goBack()}
      />
      {listDoctors.map(doctor => {
        return (
          <List
            key={doctor.id}
            type="Next"
            profile={{uri: doctor.data.photo}}
            nama={doctor.data.fullName}
            desc={doctor.data.gender}
            onPress={() => navigation.navigate('DokterProfile', doctor)}
          />
        );
      })}
    </View>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({
  content: {backgroundColor: colors.white, flex: 1},
});
