import alert from '@/components/Alert';
import Gradient from '@/components/Gradient';
import { auth } from '@/constants/firebaseConfig';
import { font, theme } from '@/theme';
import { AuthStackParamList } from '@/types/navigation';
import { AntDesign } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { FC, useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

type LoginStackParamList = StackNavigationProp<AuthStackParamList, 'Login'>;
type Props = {
  navigation: LoginStackParamList;
};

const Login: FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = async () => {
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
  };

  return (
    <Gradient>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign name='leftcircleo' size={30} color={theme.white} />
      </TouchableOpacity>

      <Text style={styles.title}>ログイン</Text>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.formContainer}>
          <View style={styles.fromGroup}>
            <Text style={styles.label}>メールアドレス</Text>
            <TextInput
              value={email}
              style={styles.input}
              onChangeText={setEmail}
              keyboardType='email-address'
            />
          </View>

          <View style={styles.fromGroup}>
            <Text style={styles.label}>パスワード</Text>
            <TextInput
              value={password}
              style={styles.input}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          <TouchableOpacity onPress={handleLogin} style={styles.goProfile}>
            <AntDesign name='rightcircleo' size={30} color={theme.white} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </Gradient>
  );
};

const styles = StyleSheet.create({
  title: {
    color: theme.white,
    fontFamily: font.NotoSans,
    fontSize: 24,
    fontWeight: 'medium',
    marginTop: 50
  },
  formContainer: {
    marginTop: 20
  },
  fromGroup: {
    marginTop: 10
  },
  label: {
    fontSize: 16,
    color: theme.white,
    fontFamily: font.NotoSans
  },
  input: {
    marginTop: 10,
    color: theme.primary,
    backgroundColor: theme.white,
    borderRadius: 5,
    minHeight: 50,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 20,
    borderWidth: 0
  },
  goProfile: {
    marginTop: 30,
    alignItems: 'flex-end'
  }
});

export default Login;
