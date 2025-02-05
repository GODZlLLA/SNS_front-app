import SuperRootStack from '@/navigation';
import { registerRootComponent } from 'expo';

// screen

const App = () => {
  return <SuperRootStack />;
};

registerRootComponent(App);
