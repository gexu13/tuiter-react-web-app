import React from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { registerThunk } from './services/auth-thunks';

function RegisterScreen() {

    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [avatar, setAvatar] = useState("avatar-1.png");

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleRegister = async () => {
        try {
            const result = await dispatch(registerThunk({username, firstName, lastName, password, avatar})).unwrap()
            navigate("/tuiter/profile");
        }
        catch (e) {
            alert("Username already existed! try another one.");
        }
    }

    return (
        <div>
            <h1>Register Screen</h1>
            <div className='mt-2'>
                <label>Username</label>
                <input className='form-control' type="text" value={username}
                    onChange={e => setUsername(e.target.value)}/>
            </div>    
            <div className='mt-2'>
                <label>First Name</label>
                <input className='form-control' type="text" value={firstName}
                    onChange={e => setFirstName(e.target.value)}/>
            </div>
            <div className='mt-2'>
                <label>Last Name</label>
                <input className='form-control' type="text" value={lastName}
                    onChange={e => setLastName(e.target.value)}/>
            </div>
            <div className='mt-2'>
                <label>Password</label>
                <input className='form-control' type="password" value={password}
                    onChange={e => setPassword(e.target.value)}/>
            </div>
            <div className='mt-2'>
                <label htmlFor="avatar">Select your avatar</label>
                <select className="form-control form-select" id="avatar" onChange={e => setAvatar(e.target.value)}>
                    <option value="avatar-1.png" disabled>Select one</option>
                    <option value="avatar-1.png" >One</option>
                    <option value="avatar-2.png" >Two</option>
                    <option value="avatar-3.png" >Three</option>
                </select>
            </div>
            <button className='btn btn-primary mt-2'
                onClick={handleRegister}>
                Register
            </button>
        </div>
        
    );
}

export default RegisterScreen;