import alert from '@/components/Alert';
import Loading from '@/components/Loading';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@/constants';
import { auth } from '@/constants/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { FC, useState } from 'react';
import {
  Button,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

const Login: FC = () => {
  const [password, setPassword] = useState<string>('');
  const [email, seEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogin = async () => {
    setLoading(true);

    if (!email) {
      alert('エラー', 'メールアドレスを入力してください');
      setLoading(false);
      return;
    }

    if (!password) {
      alert('エラー', 'パスワードを入力してください');
      setLoading(false);
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      alert('エラー', 'ログイン失敗');
      setLoading(false);
    }

    setLoading(false);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {loading && <Loading />}

      <KeyboardAvoidingView
        behavior='height'
        style={styles.KeyboardAvoidingView}
      >
        <View style={styles.container}>
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
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#fff',
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT
  },
  KeyboardAvoidingView: {
    width: '100%',
    height: 'auto'
  },
  container: {
    padding: 20,
    flex: 0,
    justifyContent: 'center'
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
