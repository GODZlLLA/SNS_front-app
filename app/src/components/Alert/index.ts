/**
 * プラットフォームがwebだと、react-native産のAlertが機能しないのでポリフィルを作成
 */

import { Alert, AlertButton, AlertOptions, Platform } from 'react-native';

const alertPolyfill = (
  title: string,
  description: string,
  options?: AlertButton[],
  extra?: AlertOptions
) => {
  const result = window.confirm([title, description].filter(Boolean).join('\n'));

  if (result) {
    const confirmOption = options?.find(({ style }) => style !== 'cancel');
    confirmOption && (confirmOption as any).onPress();
  } else {
    const cancelOption = options?.find(({ style }) => style === 'cancel');
    cancelOption && (cancelOption as any).onPress();
  }
};

const alert = Platform.OS === 'web' ? alertPolyfill : Alert.alert;

export default alert;
