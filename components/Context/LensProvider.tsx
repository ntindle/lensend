import React, { createContext, useContext, useState } from 'react';
import { CookiesProvider, useCookies } from 'react-cookie';


const LensContext = createContext<UseLensContextProps>({
    cookies: {
        token: '',
        refreshToken: ''
    },
    setCookie: (name: string, value: any, options: any) => { },
    removeCookie: (name: string, options?: any) => { }

});


export type UseLensContextProps = {
    cookies: {
        token?: any;
        refreshToken?: any;
    },
    setCookie: (name: string, value: any, options?: any) => void,
    removeCookie: (name: "token" | "refreshToken", options?: any) => void

};

// Hook to provide access to context object
export const UseLensContext = (): UseLensContextProps => {
    return useContext(LensContext);
};

export type LensContextProviderProps = {
    children: React.ReactNode;
};


// Provider component to wrap app and provide context object
export const LensContextProvider = ({ children }: LensContextProviderProps) => {
    const [cookies, setCookie, removeCookie] = useCookies(['token', 'refreshToken']);

    // Assign React state and constants to context object
    const AppContextObject = {
        cookies, setCookie, removeCookie
    };
    return (
        <CookiesProvider >
            <LensContext.Provider value={AppContextObject}>
                {children}
            </LensContext.Provider>
        </CookiesProvider >
    );
};
