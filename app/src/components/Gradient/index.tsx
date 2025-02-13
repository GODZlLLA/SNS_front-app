import { space } from '@/theme';
import { LinearGradient } from 'expo-linear-gradient';
import React, { FC } from 'react';
import { StyleSheet } from 'react-native';

type Props = {
  children: React.ReactNode;
};

const Gradient: FC<Props> = ({ children }) => {
  return (
    <LinearGradient
      colors={['#111827', '#1F2937']}
      style={styles.container}
    >
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: space.xl
  }
});

export default Gradient;
