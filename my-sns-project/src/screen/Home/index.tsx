import { RootStackParamList } from '@/types/navigation';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { FC } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

type HomeRouteProp = RouteProp<RootStackParamList, 'Home'>;
type HomeNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type Props = {
  navigation: HomeNavigationProp;
  route: HomeRouteProp;
};

const HomeScreen: FC<Props> = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Button
        title='Go to Details'
        onPress={() => navigation.navigate('Detail')}
      />

      <Text>HOME Screen</Text>

      <ExpoStatusBar style='auto' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default HomeScreen;
