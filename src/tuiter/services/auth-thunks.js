import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authService from "./auth-service";

export const loginThunk = createAsyncThunk(
    "auth/login",
    async (credentials) => {
        const user = await authService.login(credentials);
        // console.log(user);
        return user;
    }
);

export const profileThunk = createAsyncThunk(
    "auth/profile",
    async () => {
        const user = await authService.profile();
        return user;
    }   
);

export const logoutThunk = createAsyncThunk(
    "auth/logout",
    async () => {
        return await authService.logout();
    }
);

export const updateUserThunk = createAsyncThunk(
    "auth/updateUser",
    async (user) => {
        await authService.updateUser(user);
        return user;
    }
);

export const registerThunk = createAsyncThunk(
    "auth/register",
    async (user) => {
        await authService.register(user);
        return user;
    }
);


