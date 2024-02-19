import React, { createContext } from 'react';

interface AuthUser {
  name: string;
  matricula: string;
  type: string;
}

interface AuthUserProviderProps {
  user: AuthUser;
  getUser: () => void;
}

export const AuthUserContext = createContext<AuthUserProviderProps>({} as AuthUserProviderProps);

export const AuthUserProvider = ({ children } : { children : React.ReactNode}) => {
  const [user, setUser] = React.useState<AuthUser>({} as AuthUser);

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
    <AuthUserContext.Provider value={{user, getUser}}>
      {children}
    </AuthUserContext.Provider>
  );
};
