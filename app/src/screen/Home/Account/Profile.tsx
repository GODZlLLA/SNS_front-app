import alert from '@/components/Alert';
import { auth, db } from '@/constants/firebaseConfig';
import { StackNavigationProp } from '@react-navigation/stack';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import React, { FC, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

type ProfileStackParamList = {
  Profile: undefined;
  Home: undefined;
};
type ProfileProps = {
  navigation: StackNavigationProp<ProfileStackParamList, 'Profile'>;
};

const Profile: FC<ProfileProps> = ({ navigation }) => {
  const [username, setUsername] = useState<string>('');
  const [bio, setBio] = useState<string>('');

  const handleProfileSetUp = async () => {
    if (!username) {
      alert('エラー', 'ユーザー名を入力してください');

      return;
    }

    const user = auth.currentUser;

    if (!user) return;

    try {
      await setDoc(doc(db, 'users', user.uid), {
        username,
        bio,
        avatar: '',
        age: '',
        email: user.email,
        createdAt: serverTimestamp(),
        isCompleatSetup: true
      });

      alert('プロフィール設定完了', 'ホーム画面に移動します');
    } catch (error: any) {
      alert('エラー', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>プロフィール設定</Text>

      <View>
        <Text>ユーザー名</Text>
        <TextInput
          placeholder=''
          onChangeText={setUsername}
          value={username}
          style={styles.input}
        />
        <Text>自己紹介</Text>
        <TextInput
          placeholder=''
          onChangeText={setBio}
          value={bio}
          style={styles.input}
        />
      </View>

      <Button
        onPress={handleProfileSetUp}
        title='設定完了'
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
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 5
  }
});

export default Profile;
