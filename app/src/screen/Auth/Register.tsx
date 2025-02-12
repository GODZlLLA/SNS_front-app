import alert from '@/components/Alert';
import { auth } from '@/constants/firebaseConfig';
import { StackNavigationProp } from '@react-navigation/stack';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { FC, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

type RegisterStackParamList = {
  Register: undefined;
  Profile: undefined;
  Login: undefined;
};

type RegisterProps = {
  navigation: StackNavigationProp<RegisterStackParamList, 'Register'>;
};

const Register: FC<RegisterProps> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSignUp = async () => {
    if (!email) {
      alert('エラー', 'メールアドレスを入力してください');

      return;
    }

    if (!password) {
      alert('エラー', 'パスワードを入力してください');

      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      alert('登録エラー', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ユーザー登録</Text>
      <Text>メールアドレス</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder='email'
        keyboardType='email-address'
        autoCapitalize='none'
        style={styles.input}
      />
      <Text>パスワード</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder='password'
        placeholderTextColor={styles.placeholder.color}
        secureTextEntry
        style={styles.input}
      />
      <Button title='登録' onPress={handleSignUp} />
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
  },
  placeholder: {
    color: '#333'
  }
});

export default Register;
