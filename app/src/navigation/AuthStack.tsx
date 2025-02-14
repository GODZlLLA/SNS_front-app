import ForgotPassword from '@/screen/Auth/ForgotPassword';
import Login from '@/screen/Auth/Login';
import Register from '@/screen/Auth/Register';
import Welcome from '@/screen/Auth/Welcome';
import type { AuthStackParamList } from '@/types/navigation';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { FC } from 'react';

const Stack = createStackNavigator<AuthStackParamList>();

const AuthStack: FC = () => {
  const navigationOptions: StackNavigationOptions = {
    headerShown: false,
    gestureEnabled: false
  };

  return (
    <Stack.Navigator screenOptions={navigationOptions}>
      <Stack.Screen component={Login} name='Login' />
      <Stack.Screen component={Welcome} name='Welcome' />
      <Stack.Screen component={Register} name='Register' />
      <Stack.Screen component={ForgotPassword} name='ForgotPassword' />
    </Stack.Navigator>
  );
};

export default AuthStack;
