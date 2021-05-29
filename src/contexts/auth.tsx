import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import Auth from '../services/auth';
import api from '../services/api';

interface ErrorAndMessageResponse { 
    message: string | null;
    error: string | null;
}

interface AuthContextData {
    loading: boolean;
    signed: boolean;
    user: object | null;
    signIn(
        email: string,
        password: string,
        remenber: boolean
        ): Promise<void | string>;
    signOut(): Promise<void>;
    forgotPassword(email: string): Promise<ErrorAndMessageResponse>;
    resetPassword(newPassword: string, token: string): Promise<ErrorAndMessageResponse>
}

interface Props {
    children: ReactNode;
}

const AuthContext = createContext({} as AuthContextData);

export function AuthProvider(props: Props) {
    const [user, setUser] = useState<AuthContextData["user"]>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadeLocalStorage() {
            const storagedUser = await localStorage.getItem("@oeePrototypeAuthUser");
            const storagedToken = await localStorage.getItem("@oeePrototypeAuthToken");

            if (storagedUser && storagedUser) {
                setUser(JSON.parse(storagedUser));
                api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
            }
        }
        loadeLocalStorage();
        setLoading(false);
    },[])

    async function signIn(email: string, password: string, remenber: boolean) {
        // const { token, user, error } = await Auth.signIn(email, password);

        // if (user !== null && user !== undefined) {
        //     if (remenber) {
        //         localStorage.setItem("@oeePrototypeAuthUser", JSON.stringify(user))
        //         localStorage.setItem("@oeePrototypeAuthToken", token || "")
        //     }
        //     setUser(user);
        //     api.defaults.headers.Authorization = `Bearer ${token}`;
        // } else {
        //     return error;
        // }

        setUser({ name: 'admin', email: 'admin@onseeked.com'});
    }

    async function signOut() {
        localStorage.removeItem("@oeePrototypeAuthUser");
        localStorage.removeItem("@oeePrototypeAuthToken");
        setUser(null);
    }

    async function forgotPassword(email: string) {
        return await Auth.forgotPassword(email)
    }

    async function resetPassword(newPassword: string, token: string) {
        return await Auth.resetPassword(newPassword, token)
    }

    return (
        <AuthContext.Provider value={{
            loading,
            signed: Boolean(user),
            user,
            signIn,
            signOut,
            forgotPassword,
            resetPassword
        }}>
            { props.children}
        </AuthContext.Provider>
    );
}

export default function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider.');
    }

    return context;
}