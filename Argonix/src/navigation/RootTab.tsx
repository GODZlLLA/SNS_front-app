import { RootStackParamList } from '@/types/navigation';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions
} from '@react-navigation/material-top-tabs';
import React, { FC } from 'react';
import AuthStack from './AuthStack';

const RootStack = createMaterialTopTabNavigator<RootStackParamList>();

const RootTab: FC = () => {
  const navigationOptions: MaterialTopTabNavigationOptions = {
    tabBarStyle: {
      display: 'none'
    },
    tabBarIndicatorContainerStyle: {
      display: 'none'
    }
  };

  return (
    <RootStack.Navigator
      initialRouteName={'AuthStack'}
      screenOptions={navigationOptions}
    >
      <RootStack.Screen name='AuthStack' component={AuthStack} />
    </RootStack.Navigator>
  );
};

export default RootTab;
