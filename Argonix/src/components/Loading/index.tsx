import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@/constants';
import { FC } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

const Loading: FC = () => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size='large' color='#0000ff' />
    </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    position: 'absolute',
    left: 0,
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 99,
    flex: 1,
    backgroundColor: '#fff'
  }
});

export default Loading;
