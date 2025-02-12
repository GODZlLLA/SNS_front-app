import { useAuth } from '@/hooks/useAuth';
import HomeScreen from '@/screen/Home';
import { RootStackParamList } from '@/types/navigation';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions
} from '@react-navigation/material-top-tabs';
import React, { FC } from 'react';
import AuthStack from './AuthStack';

const RootStack = createMaterialTopTabNavigator<RootStackParamList>();

const RootTab: FC = () => {
  const { user } = useAuth();
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
      initialRouteName={user ? 'Home' : 'AuthStack'}
      screenOptions={navigationOptions}
    >
      {!user
        ? <RootStack.Screen name='AuthStack' component={AuthStack} />
        : <RootStack.Screen name='Home' component={HomeScreen} />}
    </RootStack.Navigator>
  );
};

export default RootTab;
