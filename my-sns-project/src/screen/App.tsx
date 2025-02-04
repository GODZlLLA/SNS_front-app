import { RootStackParamList } from '@/types/navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { registerRootComponent } from 'expo';

// screen
import DetailScreen from './DetailScreen';
import HomeScreen from './HomeScreen';

const Stack = createBottomTabNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{ headerShown: false, title: 'HOME' }}
        />

        <Stack.Screen
          name='Detail'
          component={DetailScreen}
          options={{ headerShown: false, title: 'DETAIL' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

registerRootComponent(App);
