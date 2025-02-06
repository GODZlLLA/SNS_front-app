import { useUserdata } from '@/hooks/useUserdata';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import React, { createContext, FC, ReactNode, useEffect, useState } from 'react';

type AuthContextType = {
  user: User | null;
  loading: boolean;
  isCompleatSetup: boolean;
};

type AuthProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: false,
  isCompleatSetup: false
});

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [isCompleatSetup, setIsCompleatSetup] = useState<boolean>(false);
  const auth = getAuth();
  const userdata = useUserdata();

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsCompleatSetup(userdata?.isCompleatSetup ? true : false);
      setLoading(false);
    });

    return () => subscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, isCompleatSetup }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
