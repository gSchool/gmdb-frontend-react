import React from 'react';
import UserLogin from '../UserLogin';
import ActiveUser from './ActiveUser';
import { UserContext, UserProvider} from '../User.provider';

export default function UserHeader() {
    return (
        <UserProvider>
            <UserContext.Consumer>
                {(context) => (
                <section className="header-user">{!context.isLoggedIn ? <UserLogin /> : <ActiveUser />}</section>
                )}
            </UserContext.Consumer>
        </UserProvider>
    )
}