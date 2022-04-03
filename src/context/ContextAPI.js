import React, { createContext, useState } from 'react';

export const LoginContext = createContext({});
const ContextAPI = ({children}) => {
    const [auth, setAuth] = useState({});
    return (
        <LoginContext.Provider value={{auth, setAuth}}>
            {children}
        </LoginContext.Provider>
    );
};

export default ContextAPI;