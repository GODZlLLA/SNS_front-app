import type { RootStackParamList } from '@/types/navigation';
import { NavigationProp, useNavigation } from '@react-navigation/native';

export const useNav = useNavigation<NavigationProp<RootStackParamList>>;
