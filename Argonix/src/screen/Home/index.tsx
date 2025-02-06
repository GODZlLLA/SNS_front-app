import { useUserdata } from '@/hooks/useUserdata';
import { RootStackParamList } from '@/types/navigation';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type HomeRouteProp = RouteProp<RootStackParamList, 'Home'>;
type HomeNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type Props = {
  navigation: HomeNavigationProp;
  route: HomeRouteProp;
};

const HomeScreen: FC<Props> = ({ navigation, route }) => {
  const userdata = useUserdata();
  console.log(userdata);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ホーム画面</Text>

      {userdata && (
        <View>
          <Text style={styles.heading1}>ユーザーデータ</Text>
          <Text>ユーザー名</Text>
          <Text>{userdata.username}</Text>
          <Text>メールアドレス</Text>
          <Text>{userdata.email}</Text>
          <Text>アバター画像</Text>
          <Text>{userdata.avatar}</Text>
          <Text>年齢</Text>
          <Text>{userdata.age}</Text>
          <Text>自己紹介</Text>
          <Text>{userdata.bio}</Text>
          <Text>アカウント作成日</Text>
          <Text>{userdata.createdAt.toDate().toLocaleDateString()}</Text>
        </View>
      )}

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
