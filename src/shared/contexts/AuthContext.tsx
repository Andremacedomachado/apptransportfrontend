import { createContext, useCallback, useContext, useState } from 'react';
import api from '../../services/api/Api';

interface IAuthContextState {
    token: ITokenState,
    signIn({ email, password }: IUserLoginData): Promise<void>,
    userLogged(): boolean,
}

interface IAuthProviderProps {
    children: React.ReactNode,
}

export interface IUserLoginData {
    email: string;
    password: string,
}

interface ITokenState {
    token: string;
}

const AuthContext = createContext<IAuthContextState>({} as IAuthContextState);

const AuThProvider: React.FC<IAuthProviderProps> = ({ children }: IAuthProviderProps) => {
    const [token, setToken] = useState<ITokenState>(() => {
        const token = localStorage.getItem('@PermissionAT:token');
        if (token) {
            api.defaults.headers.common.authorization = `Bearer ${token}`;
            return { token };
        }
        return {} as ITokenState;
    });

    const signIn = useCallback(async ({ email, password }: IUserLoginData) => {
        const response = await api.post('/login', { email, password } as IUserLoginData);
        const { token } = response.data;
        setToken(token);
        localStorage.setItem('@PermissionAT:token', token);
        api.defaults.headers.common.authorization = `Bearer ${token}`;
    }, []);

    const userLogged = useCallback(() => {
        const token = localStorage.getItem('@PermissionAT:token');
        if (token) {
            return true;
        }
        return false;

    }, []);

    return (
        <AuthContext.Provider value={{ token, signIn, userLogged }}>
            {children}
        </AuthContext.Provider>
    );
};

function useAuth(): IAuthContextState {
    const context = useContext(AuthContext);
    return context;
}

export { AuthContext, AuThProvider, useAuth };