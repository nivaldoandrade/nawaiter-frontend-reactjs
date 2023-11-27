import { useQuery } from '@tanstack/react-query';
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { SplashScreen } from '../components/SplashScreen';
import { localStoragesKeys } from '../config/localStorageKeys';
import api from '../services/api';
import usersService from '../services/usersService';
import { MeResponse } from '../services/usersService/me';

interface AuthContextValue {
  signedIn: boolean;
  user: MeResponse | undefined;
  signIn: (accessToken: string) => void;
  signOut: () => void;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext({} as AuthContextValue);

export function AuthProvider({ children }: AuthProviderProps) {
  const [signedIn, setSignedIn] = useState<boolean>(() => {
    const storedAccessToken = localStorage.getItem(
      localStoragesKeys.ACCESS_TOKEN,
    );

    if (storedAccessToken) {
      api.defaults.headers.authorization = `Bearer ${storedAccessToken}`;
    }

    return !!storedAccessToken;
  });

  const {
    isError,
    data: user,
    isFetching,
    isLoading,
    remove,
    isSuccess,
  } = useQuery({
    queryKey: ['user', 'me'],
    queryFn: async () => usersService.me(),
    enabled: signedIn,
    staleTime: Infinity,
  });

  const signIn = useCallback(async (accessToken: string) => {
    localStorage.setItem(localStoragesKeys.ACCESS_TOKEN, accessToken);

    api.defaults.headers.authorization = `Bearer ${accessToken}`;

    setSignedIn(true);
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem(localStoragesKeys.ACCESS_TOKEN);

    remove();
    setSignedIn(false);
  }, [remove]);

  useEffect(() => {
    if (isError) {
      signOut();
    }
  }, [isError, signOut]);

  const value = useMemo(
    () => ({ signedIn: signedIn && isSuccess, signIn, signOut, user }),
    [isSuccess, signIn, signOut, signedIn, user],
  );

  return (
    <AuthContext.Provider value={value}>
      <SplashScreen isLoading={isFetching || isLoading} />
      {!isFetching && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
