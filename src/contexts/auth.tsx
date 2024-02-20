import React, { createContext, useState } from 'react';

interface AuthUser {
  name: string;
  matricula: string;
  type: string;
}

interface AuthUserProviderProps {
  user: AuthUser;
  getUser: () => void;
  existReservation: boolean;
  setExistReservation: (existReservation: boolean) => void;
  ipAddress: string;
  setIpAddress: (ipAddress: string) => void;
}

export const AuthUserContext = createContext<AuthUserProviderProps>({} as AuthUserProviderProps);

export const AuthUserProvider = ({ children } : { children : React.ReactNode}) => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);
  const [existReservation, setExistReservation] = useState(false)
  const [ipAddress, setIpAddress] = useState('https://10ef-179-67-44-211.ngrok-free.app')

  function getUser() {
    // const user = localStorage.getItem('user');
    // if (user) {
    //   return JSON.parse(user);
    // }
    // return null;

    setUser({
      name: 'Jaum_https',
      matricula: '123456',
      type: 'admin'
    })
  }

  React.useEffect(() => {
    getUser();
  }, []);
  
  return (
    <AuthUserContext.Provider value={{
        user,
        getUser, 
        existReservation, 
        setExistReservation,
        ipAddress,
        setIpAddress
      }}>
      {children}
    </AuthUserContext.Provider>
  );
};
