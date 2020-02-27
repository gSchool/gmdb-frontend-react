import React, {useState, useContext} from 'react';
import './UserLogin.css';
import { UserContext } from '../User.provider';

function UserLogin() {
    const {logIn} = useContext(UserContext)
    const [username, setUsername] = useState('');

    function handleChange(e) {
        const {
            target: { value }
        } = e;
        setUsername(value);
    }

    function signIn(e) {
        logIn({ username });
    }

    return (
        <>
            <input type="text" aria-label="username-input" placeholder="username" onChange={handleChange}></input>
            <button onClick={signIn}>login</button>
        </>
    );
}

export default UserLogin;