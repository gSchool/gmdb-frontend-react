import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export function UserProvider({children}) {
    const [isLoggedIn, setLogInStatus] = useState(false);
    const [user, setUser] = useState({ username: ''});

    function logIn(user) {
        setLogInStatus(true);
        setUser(user);
    }

    return (
        <UserContext.Provider value={{ user, isLoggedIn, logIn }}>
            {children}
        </UserContext.Provider>
    );
}
