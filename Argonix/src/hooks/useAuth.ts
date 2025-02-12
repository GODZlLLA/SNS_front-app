import { AuthContext } from '@/components/AuthProvider';
import { useContext } from 'react';

export const useAuth = () => useContext(AuthContext);
