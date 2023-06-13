import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { profileThunk, logoutThunk, updateUserThunk } from './services/auth-thunks';


function ProfileScreen() {


    const { currentUser } = useSelector(state => state.user);

    const [profile, setProfile] = useState(currentUser);


    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const saveProfile = async () => {
        await dispatch(updateUserThunk(profile));
    }

    const loadProfile = async () => {
        const { payload } = await dispatch(profileThunk());
        setProfile(payload);
    }

    useEffect(() => {
        loadProfile();
    }, []);

    return (
        <div>
            <h1>Profile Screen</h1>
            { profile && 
                (<div>
                    <div>
                        <label>Username</label>
                        <input className='form-control'
                            type="text" value={profile.username} disabled/>
                    </div>
                    <div>
                        <label>First Name</label>
                        <input className='form-control' 
                            type="text" value={profile.firstName}
                            onChange={(e) => {
                                const newProfile = {...profile, firstName: e.target.value};
                                setProfile(newProfile);
                        }}/>
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input className='form-control'
                            type="text" value={profile.lastName}
                            onChange={(e) => {
                                const newProfile = {...profile, lastName: e.target.value};
                                setProfile(newProfile);
                        }}/>
                    </div>
                    <div>
                        <label>Password</label>
                        <input className='form-control'
                            type="password" value={profile.password}
                            onChange={(e) => {
                                const newProfile = {...profile, password: e.target.value};
                                setProfile(newProfile);
                        }}/>
                    </div>
                </div>
            )}
            <button className='btn btn-danger mt-2 me-2'
                    onClick={() => {
                                    dispatch(logoutThunk());
                                    navigate("/tuiter/login");}
                            }>
                Logout
            </button>
            <button className='btn btn-primary mt-2'
                    onClick={() => {saveProfile()}}>
                Save
            </button>
            {JSON.stringify(currentUser)}
        </div>
    );

    
}

export default ProfileScreen;