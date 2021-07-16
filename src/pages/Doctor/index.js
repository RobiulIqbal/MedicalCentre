import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  DoctorCategory,
  DoctorRated,
  Gap,
  HomeProfile,
  NewsItem,
} from '../../components';
import {colors, fonts} from '../../utils';

const Doctor = () => {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapContent}>
            <Gap height={30} />
            <HomeProfile />
            <Text style={styles.welcome}>
              Mau konsultasi dengan siapa hari ini?
            </Text>
          </View>
          <View style={styles.scrollWrapper}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.category}>
                <Gap width={32} />
                <DoctorCategory />
                <DoctorCategory />
                <DoctorCategory />
                <DoctorCategory />
                <Gap width={22} />
              </View>
            </ScrollView>
          </View>
          <View style={styles.wrapContent}>
            <Text style={styles.sectionLabel}>Top Rated Doctors</Text>
            <DoctorRated />
            <DoctorRated />
            <DoctorRated />
            <Text style={styles.sectionLabel}>Good News</Text>
          </View>
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <Gap height={30} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Doctor;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    paddingVertical: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  welcome: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    marginTop: 30,
    marginBottom: 16,
    maxWidth: 250,
  },
  category: {flexDirection: 'row'},
  scrollWrapper: {marginHorizontal: -16},
  wrapContent: {paddingHorizontal: 16},
  sectionLabel: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
  },
});
