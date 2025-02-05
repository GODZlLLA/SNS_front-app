import Login from '@/screen/Auth/Login';
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
      <Stack.Screen
        component={Login}
        name={'Login'}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
