import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';
import FlashMessage from 'react-native-flash-message';
import {Provider} from 'react-redux';
import store from './redux/store';
import {LogBox} from 'react-native';

const MainApp = () => {
  return (
    <>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
      <FlashMessage position="top" />
    </>
  );
};
const App = () => {
  LogBox.ignoreLogs(['Setting a timer']);
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};
export default App;
