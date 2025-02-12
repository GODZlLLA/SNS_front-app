import { AuthProvider } from '@/components/AuthProvider';
import SuperRootStack from '@/navigation';
import { registerRootComponent } from 'expo';

// screen

const App = () => {
  return (
    <AuthProvider>
      <SuperRootStack />
    </AuthProvider>
  );
};

registerRootComponent(App);
