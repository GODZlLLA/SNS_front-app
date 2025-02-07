import { useAuth } from '@/hooks/useAuth';
import HomeScreen from '@/screen/Home';
import { RootStackParamList } from '@/types/navigation';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions
} from '@react-navigation/material-top-tabs';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { FC } from 'react';
import { ActivityIndicator, View } from 'react-native';
import AuthStack from './AuthStack';

const RootStack = createMaterialTopTabNavigator<RootStackParamList>();

const RootTab: FC = () => {
  const { user, loading } = useAuth();
  const navigation: StackNavigationProp<RootStackParamList, 'Home'> = useNavigation();
  const navigationOptions: MaterialTopTabNavigationOptions = {
    tabBarStyle: {
      display: 'none'
    },
    tabBarIndicatorContainerStyle: {
      display: 'none'
    }
  };

  // 認証状態を取得中はローディング画面を表示
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' color='#0000ff' />
      </View>
    );
  }

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
