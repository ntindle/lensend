import React, { createContext, useContext, useState } from 'react';

const LensContext = createContext(undefined);

// Hook to provide access to context object
export const UseLensContext = () => {
  return useContext(LensContext);
};

function getInitialState(){
    const token = localStorage.getItem('token');
    const refreshToken = localStorage.getItem('refreshToken');
    return { token, refreshToken } ? { token, refreshToken } : { token: null, refreshToken: null };
}


// Provider component to wrap app and provide context object
export const LensContextProvider = ({children }) => {
  const [session, setSession] = useState(getInitialState());
  const globalValue = "Global Value"

  // Assign React state and constants to context object
  const AppContextObject = {
    sessionValue:{
          session: session, setSession: setSession
    },
    global:{
          globalValue  
    } 
  };
  return (
    <LensContext.Provider value={AppContextObject}>
      {children}
    </LensContext.Provider>
  );
};

LensContextProvider.propTypes = {
  children: React.Fragment,
};