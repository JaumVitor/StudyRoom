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
}

export const AuthUserContext = createContext<AuthUserProviderProps>({} as AuthUserProviderProps);

export const AuthUserProvider = ({ children } : { children : React.ReactNode}) => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);
  const [existReservation, setExistReservation] = useState(false)
  
  function getUser() {
    // const user = localStorage.getItem('user');
    // if (user) {
    //   return JSON.parse(user);
    // }
    // return null;

    setUser({
      name: 'Jaum_https',
      matricula: '123456',
      type: 'student'
    })
  }

  React.useEffect(() => {
    getUser();
  }, []);
  
  return (
    <AuthUserContext.Provider value={{user, getUser, existReservation, setExistReservation}}>
      {children}
    </AuthUserContext.Provider>
  );
};
