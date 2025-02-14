import Gradient from '@/components/Gradient';
import { font, theme } from '@/theme';
import { AuthStackParamList } from '@/types/navigation';
import { Button } from '@react-native-material/core';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { FC } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

type WelcomeStackParamList = StackNavigationProp<AuthStackParamList, 'Welcome'>;
type WelcomeProps = {
  navigation: WelcomeStackParamList;
};

const Welcome: FC<WelcomeProps> = ({ navigation }) => {
  return (
    <Gradient>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('@/assets/icon.png')}
          />
        </View>

        <Text style={styles.title}>Argonixへようこそ</Text>

        <View style={styles.buttonContainer}>
          <Button
            title='ログイン'
            color={theme.white}
            titleStyle={styles.buttonText}
            onPress={() => navigation.navigate('Login')}
          />

          <Button
            title='アカウントの作成'
            variant='text'
            titleStyle={{ ...styles.buttonText, color: theme.white }}
            style={styles.account}
            onPress={() => navigation.navigate('Register')}
          />
        </View>

        <Text style={styles.otherOption}>その他のオプションを見る</Text>

        <Text style={styles.paragraph}>
          登録することをもって私は、Argonixのサービス利用規約、Argonixの差別禁止のポリシー、個人情報保護ポリシーに同意します。
        </Text>
      </View>
    </Gradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logoContainer: {
    marginTop: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: '100%'
  },
  title: {
    color: theme.white,
    fontFamily: font.NotoSans,
    fontSize: 24,
    fontWeight: 'medium',
    textAlign: 'center',
    marginTop: 24
  },
  buttonContainer: {
    marginTop: 24
  },
  buttonText: {
    fontSize: 16,
    fontFamily: font.NotoSans
  },
  account: {
    borderColor: theme.white,
    borderStyle: 'solid',
    borderWidth: 1,
    marginTop: 14
  },
  otherOption: {
    color: theme.white,
    fontSize: 12,
    fontFamily: font.NotoSans,
    textAlign: 'center',
    marginTop: 14
  },
  paragraph: {
    fontSize: 10,
    textAlign: 'left',
    marginTop: 14,
    color: theme.white,
    fontFamily: font.NotoSans
  }
});

export default Welcome;
