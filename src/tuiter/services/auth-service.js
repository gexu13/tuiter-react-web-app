import axios from "axios";
// const SERVER_API_URL = process.env.REACT_APP_API_BASE;
// const USERS_URL = `${SERVER_API_URL}/users`;

const TUITS_API = 'https://tuiter-node-server-app-2hlj.onrender.com/api/users';


const api = axios.create({ withCredentials: true });


export const login = async ({ username, password }) => {
 const response = await api.post(`${USERS_URL}/login`, { username, password });
 const user = response.data;
 return user;
};

export const logout = async () => {
    const response = await api.post(`${USERS_URL}/logout`);
    return response.data;
};

export const profile = async () => {
    const response = await api.post(`${USERS_URL}/profile`);
    return response.data;
};

export const updateUser = async (user) => { 
    const response = await api.put(`${USERS_URL}`, user);
    console.log("response", response.data);
    return response.data;
};

export const register = async (user) => {
    const response = await api.post(`${USERS_URL}/register`, user);
    return response.data;
};

