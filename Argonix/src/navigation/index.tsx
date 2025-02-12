import type { SuperRootStackParamList } from '@/types/navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { FC } from 'react';
import RootTab from './RootTab';

const Stack = createStackNavigator<SuperRootStackParamList>();

const SuperRootStack: FC = () => {
  const navigationOptions: StackNavigationOptions = {
    headerShown: false,
    gestureEnabled: false
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={navigationOptions}
        initialRouteName='RootTab'
      >
        <Stack.Screen name='RootTab' component={RootTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default SuperRootStack;
