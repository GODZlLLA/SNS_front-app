import 'react-native-url-polyfill/auto';
import { AuthProvider } from '@/components/AuthProvider';
import Loading from '@/components/Loading';
import SuperRootStack from '@/navigation';
import { NotoSans_400Regular } from '@expo-google-fonts/noto-sans';
import { NotoSansJP_400Regular } from '@expo-google-fonts/noto-sans-jp';
import { registerRootComponent } from 'expo';
import { useFonts } from 'expo-font';

const App = () => {
  // フォント設定
  const [fontsLoaded] = useFonts({
    NotoSans_400Regular,
    NotoSansJP_400Regular
  });

  // フォント読み込み前はローディング
  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <AuthProvider>
      <SuperRootStack />
    </AuthProvider>
  );
};

registerRootComponent(App);
