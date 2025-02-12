import { SCREEN_HEIGHT } from '@/constants';
import { theme } from '@/theme';
import { AuthStackParamList } from '@/types/navigation';
import { Ionicons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { FC } from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type WelcomeStackParamList = StackNavigationProp<AuthStackParamList, 'Welcome'>;
type WelcomeProps = {
  navigation: WelcomeStackParamList;
};

const Welcome: FC<WelcomeProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerMask} />
        <Text style={styles.headerText}>ARGONIX</Text>
      </View>

      <View style={styles.mainVisual}>
        <ImageBackground
          source={require('@/assets/welcome/welcome_background.png')}
          resizeMode='cover'
          style={styles.mainVisualImage}
        >
          <View style={styles.mainVisualMask} />
          <View style={styles.mainVisualTextContainer}>
            <Text style={styles.mainVisualHeading}>ようこそ、ARGONIXへ！</Text>
            <Text style={styles.mainVisualText}>
              あなたのアイデアが、このコミュニティをさらに賢く、 刺激的なものにします！
            </Text>
          </View>
        </ImageBackground>
      </View>

      <View style={{ padding: 20 }}>
        {/* Buttons Section */}
        <View style={{ marginTop: 30 }}>
          {/* Google Login Button */}
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#fff',
              padding: 15,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#ddd',
              marginBottom: 15
            }}
          >
            <Ionicons name='logo-google' size={20} color='#EA4335' />
            <Text style={{ fontSize: 16, fontWeight: '500', marginLeft: 10 }}>
              GOOGLEでログイン
            </Text>
          </TouchableOpacity>

          {/* Email Registration Button */}
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#fff',
              padding: 15,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#ddd',
              marginBottom: 15
            }}
          >
            <Ionicons name='mail-outline' size={20} color='#555' />
            <Text style={{ fontSize: 16, fontWeight: '500', marginLeft: 10 }}>
              メールアドレスで登録
            </Text>
          </TouchableOpacity>

          {/* Login Link */}
          <TouchableOpacity style={{ alignItems: 'center', marginTop: 10 }}>
            <Text style={{ color: '#007AFF', fontSize: 14 }}>既存ユーザーですか？ ログイン</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.white
  },
  header: {
    width: '100%',
    height: 130,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 99
  },
  headerMask: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.black,
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: .6
  },
  headerText: {
    fontSize: 40,
    fontWeight: 'semibold',
    color: theme.white
  },
  mainVisual: {
    width: '100%',
    height: 500,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    position: 'relative',
    marginTop: -130
  },
  mainVisualImage: {
    height: '100%',
    width: '100%'
  },
  mainVisualMask: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: theme.black,
    opacity: .3
  },
  mainVisualTextContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    height: '100%',
    padding: 20
  },
  mainVisualHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.white,
    textAlign: 'left'
  },
  mainVisualText: {
    fontSize: 16,
    color: theme.white,
    textAlign: 'left',
    marginTop: 10
  },
  title: {
    fontSize: 30
  }
});

export default Welcome;
