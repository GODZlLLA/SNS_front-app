import alert from '@/components/Alert';
import Loading from '@/components/Loading';
import { auth } from '@/constants/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { FC, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const Login: FC = () => {
  const [password, setPassword] = useState<string>('');
  const [email, seEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogin = async () => {
    setLoading(true);

    if (!email) {
      alert('エラー', 'メールアドレスを入力してください');
      return;
    }

    if (!password) {
      alert('エラー', 'パスワードを入力してください');
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      alert('エラー', 'ログイン失敗');
    }

    setLoading(true);
  };

  return (
    <View style={styles.container}>
      {loading && <Loading />}

      <Text style={styles.title}>ログイン</Text>

      <Text>メールアドレス</Text>
      <TextInput
        value={email}
        onChangeText={seEmail}
        placeholder='メールアドレス'
        keyboardType='email-address'
        autoCapitalize='none'
        style={styles.input}
      />

      <Text>パスワード</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder='password'
        secureTextEntry
        style={styles.input}
      />

      <Button
        title='ログイン'
        onPress={handleLogin}
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
  },
  placeholder: {
    color: '#333'
  }
});

export default Login;
