import React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREENS} from '../@config';
import Home from '../screens/Home';
import Details from '../screens/Details';

const Stack = createNativeStackNavigator();

const MainNav = () => {
  const optionConfig = {headerTitleAlign: 'center'};
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={SCREENS.home}
          component={Home}
          options={optionConfig}
        />
        <Stack.Screen
          name={SCREENS.details}
          component={Details}
          options={optionConfig}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainNav;
