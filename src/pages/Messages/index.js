import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ListDoctor} from '../../components';
import {colors, fonts} from '../../utils';

const Massages = () => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.title}>Massages</Text>
        <View>
          <ListDoctor />
          <ListDoctor />
          <ListDoctor />
        </View>
      </View>
    </View>
  );
};

export default Massages;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  container: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginLeft: 16,
  },
});
