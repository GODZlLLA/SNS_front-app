import { RootStackParamList } from '@/types/navigation';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { FC } from 'react';
import { Button, Text, View } from 'react-native';

type HomeRouteProp = RouteProp<RootStackParamList, 'Detail'>;
type HomeNavigationProp = StackNavigationProp<RootStackParamList, 'Detail'>;
type Props = {
  navigation: HomeNavigationProp;
  route: HomeRouteProp;
};

const DetailScreen: FC<Props> = ({ navigation, route }) => {
  return (
    <View>
      <Button title='Go to Home' onPress={() => navigation.navigate('Home')} />
      <Text>Detail Screen</Text>

      <ExpoStatusBar style='auto' />
    </View>
  );
};

export default DetailScreen;
