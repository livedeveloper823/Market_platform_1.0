//third - party
import { Chance } from 'chance';
import jwtDecode from 'jwt-decode';

// Reducer - state management
import { LOGIN, LOGOUT } from "../store/reducers/action";
import authReducer from '../store/reducers/auth';

import instance from "../utils/axios";
import { AuthProps, JWTContextType, KeyedObject } from "../types";
import { createContext, useEffect, useReducer } from 'react';


const chance = new Chance();

// constant
const initialState: AuthProps = {
    isLoggedIn: false,
    isInitialized: false,
    user: null
};

const verifyToken: (st: string) => boolean = (token) => {
    if (!token) {
        return false
    }
    const decoded: KeyedObject = jwtDecode(token);

    return decoded.exp > Date.now() / 1000;
}


const setSession = (token?: string | null) => {
    if (token) {
        localStorage.setItem('token', token);
        instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    } else {
        localStorage.removeItem('token');
        delete instance.defaults.headers.common.Authorization;
    }
}

// ==============================|| JWT CONTEXT & PROVIDER ||============================== //

const JWTContext = createContext<JWTContextType | null>(null);

export const JWTProvider = ({ children }: { children: React.ReactElement }) => {
    const [state, dispatch] = useReducer(authReducer, initialState)

    useEffect(() => {
        const init = async () => {
            try {
                const token = window.localStorage.getItem('token');
                if (token && verifyToken(token)) {
                    setSession(token);
                    const response = await instance.get('/users/me');
                    const { user } = response.data;
                    dispatch({
                        type: LOGIN,
                        payload: {
                            isLoggedIn: true,
                            user
                        }
                    });
                } else {
                    dispatch({
                        type: LOGOUT
                    });
                }
            } catch (err) {
                console.error(err);
                dispatch({
                    type: LOGOUT
                });
            }
        };

        init();
    }, []);
    const login = async (email: string, password: string) => {
        const response = await instance.post('/auth/login', { email, password });
        const { token, user } = response.data;
        setSession(token);
        dispatch({
            type: LOGIN,
            payload: {
                isLoggedIn: true,
                user
            }
        });
    };

    const register = async (email: string, password: string, firstName: string, lastName: string) => {
        const id = chance.bb_pin();
        const response = await instance.post('/auth/register', {
            id,
            email,
            password,
            firstName,
            lastName
        });
        let users = response.data;

        if (window.localStorage.getItem('users') !== undefined && window.localStorage.getItem('users') !== null) {
            const localUsers = window.localStorage.getItem('users');
            users = [
                ...JSON.parse(localUsers!),
                {
                    id,
                    email,
                    password,
                    name: `${firstName} ${lastName}`
                }
            ];
        }

        window.localStorage.setItem('users', JSON.stringify(users));
    };

    const logout = () => {
        setSession(null);
        dispatch({ type: LOGOUT });
    };

    const resetPassword = async (email: string) => { };

    const updateProfile = () => { };

    //   if (state.isInitialized !== undefined && !state.isInitialized) {
    //     return <Loader />;
    //   }

    return <JWTContext.Provider value={{ ...state, login, logout, register, resetPassword, updateProfile }}>{children}</JWTContext.Provider>;
}

export default JWTContext;
