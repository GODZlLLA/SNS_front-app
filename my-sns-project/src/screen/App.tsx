import { Button } from '@/components/button';
import { registerRootComponent } from 'expo';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button label='写真を選択' theme='primary' />
      <Button label='この写真を使用' />
      <ExpoStatusBar style='auto' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

registerRootComponent(App);
