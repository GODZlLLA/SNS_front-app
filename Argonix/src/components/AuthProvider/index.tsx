import { useUserdata } from '@/hooks/useUserdata';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import React, { createContext, FC, ReactNode, useEffect, useState } from 'react';

type AuthContextType = {
  user: User | null;
  loading: boolean;
};

type AuthProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true
});

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const auth = getAuth();

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => subscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
