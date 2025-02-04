import { useNav } from '@/hooks/useNav';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { FC } from 'react';
import { Button, Text, View } from 'react-native';

const DetailScreen: FC = () => {
  const navigation = useNav();

  return (
    <View>
      <Button title='Go to Home' onPress={() => navigation.navigate('Home')} />
      <Text>Detail Screen</Text>

      <ExpoStatusBar style='auto' />
    </View>
  );
};

export default DetailScreen;
