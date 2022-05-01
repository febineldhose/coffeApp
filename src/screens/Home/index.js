import React from 'react';
import {View, Text} from 'react-native';
import {SCREENS} from '../../@config';
import styles from './styles';

export default function Home({navigation}) {
  return (
    <View style={styles._main}>
      <Text onPress={() => navigation.navigate(SCREENS.details)}>
        Home Screen
      </Text>
    </View>
  );
}
