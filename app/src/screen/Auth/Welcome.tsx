import { AuthStackParamList } from '@/types/navigation';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { FC } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

type WelcomeStackParamList = StackNavigationProp<AuthStackParamList, 'Welcome'>;
type WelcomeProps = {
  navigation: WelcomeStackParamList;
};

const Welcome: FC<WelcomeProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ようこそ</Text>

      <View style={{ marginBottom: 10 }}>
        <Button
          title='ログイン'
          onPress={() => navigation.navigate('Login')}
        />
      </View>

      <Button
        title='サインイン'
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20
  },
  title: {
    fontSize: 30
  }
});

export default Welcome;
