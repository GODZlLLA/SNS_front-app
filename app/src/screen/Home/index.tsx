import { auth } from '@/constants/firebaseConfig';
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
  const handleSignOut = () => {
    auth.signOut();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ホーム画面</Text>

      <Text>メールアドレス</Text>
      <Text>{auth.currentUser?.email}</Text>

      <Button
        title='サインアウト'
        onPress={handleSignOut}
      />

      <ExpoStatusBar style='auto' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 20
  },
  title: {
    fontSize: 30
  },
  heading1: {
    fontSize: 24
  }
});

export default HomeScreen;
