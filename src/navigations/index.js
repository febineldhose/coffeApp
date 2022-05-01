import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import MainNav from './mainNavigations';
import RootNav from './rootNavigations';

export default function NavigationProvider(params) {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  const isLoggedIn = false;
  return (
    <SafeAreaView style={{flex: 1}}>
      {isLoggedIn ? <MainNav /> : <RootNav />}
    </SafeAreaView>
  );
}
