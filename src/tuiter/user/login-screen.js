import React from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { loginThunk } from "../services/auth-thunks";

function LoginScreen() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogin = async () => {
        try {
            const result = await dispatch(loginThunk({username, password})).unwrap()
            navigate("/tuiter/profile");
        }
        catch (e) { 
            alert("Incorrect username or password! try again.");
        }
    };
    return (
        <div>
            <h1>Login Screen</h1>
            <div className="mt-2">
                <label>Username</label>
                <input className="form-control" type="text" value={username} 
                    onChange={e => setUsername(e.target.value)}/>
            </div>
            <div className="mt-2">
                <label>Password</label>
                <input className="form-control" type="password" value={password}
                    onChange={e => setPassword(e.target.value)}/>
            </div>
            <button className="btn btn-primary mt-2" 
                onClick={handleLogin}>
                Login
            </button>
        </div>
    );

}


export default LoginScreen;