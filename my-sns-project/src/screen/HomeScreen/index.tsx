import { useNav } from '@/hooks/useNav';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { FC } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const HomeScreen: FC = () => {
  const navigation = useNav();

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
