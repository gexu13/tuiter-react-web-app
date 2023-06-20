import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { profileThunk, logoutThunk, updateUserThunk } from './services/auth-thunks';
import { findTuitsByAuthorThunk } from './services/tuits-thunks';
import MyTuitItem from './tuits/my-tuit-item';


function ProfileScreen() {


    const { currentUser } = useSelector(state => state.user);
    const { myTuits } = useSelector(state => state.tuits);

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

    const loadMyTuits = async () => {
        await dispatch(findTuitsByAuthorThunk());
    }


    useEffect(() => {
        loadProfile();
        loadMyTuits();
    }, []);

    return (
        <div>
            <h1>Profile Screen</h1>
            {/* { profile && 
                ( */}
                <div>
                    <div>
                        {JSON.stringify(profile)}
                        {console.log(profile)}
                        
                        <label>Username</label>
                        <input className='form-control'
                            type="text" value={currentUser.username} disabled/>
                    </div>
                    <div>
                        <label>First Name</label>
                        <input className='form-control' 
                            type="text" value={currentUser.firstName}
                            onChange={(e) => {
                                const newProfile = {...profile, firstName: e.target.value};
                                setProfile(newProfile);
                        }}/>
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input className='form-control'
                            type="text" value={currentUser.lastName}
                            onChange={(e) => {
                                const newProfile = {...profile, lastName: e.target.value};
                                setProfile(newProfile);
                        }}/>
                    </div>
                    <div>
                        <label>Password</label>
                        <input className='form-control'
                            type="password" value={currentUser.password}
                            onChange={(e) => {
                                const newProfile = {...profile, password: e.target.value};
                                setProfile(newProfile);
                        }}/>
                    </div>
                </div>
                {/* ) */}
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

            <ul className="list-group mt-3">
            {
                myTuits.map(tuit => {
                    return <MyTuitItem key={tuit._id} tuit={tuit}/>
                })
            }          
            </ul>
        </div>
    );

    
}

export default ProfileScreen;