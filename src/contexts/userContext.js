import React, { useState, useEffect, createContext } from 'react';
import loGet from 'lodash.get';

import { auth } from '../services/firebase';

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [userData, setUserData] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(() => {
    const authListener = auth.onAuthStateChanged((user) => {
      if (user) {
        setLoadingUser(true);

        setUserData({
          displayName: loGet(user, ['displayName']),
          uid: loGet(user, ['uid']),
          photoURL: loGet(user, ['photoURL']),
          email: loGet(user, ['email']),
        });

        setLoadingUser(false);
      }

      setLoadingUser(false);
      return null;
    });

    return () => authListener();
  }, []);

  const contextValues = {
    userData,
    loadingUser,
    logout: async () => {
      await auth.signOut();
      window.location.reload();
    },
  };

  return (
    <UserContext.Provider value={contextValues}>
      {children}
    </UserContext.Provider>
  );
}
