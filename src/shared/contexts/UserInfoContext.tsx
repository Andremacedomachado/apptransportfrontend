import { createContext, useCallback, useContext, useState } from 'react';
import api from '../../services/api/Api';
import { ApiException } from '../../services/api/ApiException';
import { getByEmail } from '../../services/api/user/User';

interface IUserInfoContextState {
    user: IUserData,
    registerUserCurrent(email: string): Promise<void>
}

interface IUserInfoProviderProps {
    children: React.ReactNode,
}

export interface IUserLoginData {
    email: string;
    password: string,
}

interface IUserData {
    id: string,
    name: string,
    email: string,
    roles: string[]
}

const UserInfoContext = createContext<IUserInfoContextState>({} as IUserInfoContextState);

const UserInfoProvider: React.FC<IUserInfoProviderProps> = ({ children }: IUserInfoProviderProps) => {
    const [user, setUser] = useState<IUserData>({} as IUserData);

    const registerUserCurrent = useCallback(async (email: string) => {
        await getByEmail(email)
            .then(result => {
                if (result instanceof ApiException) {
                    alert(result.message);
                }
                else {
                    setUser(() => {
                        return {
                            id: result.id,
                            name: result.name,
                            email: result.email,
                            roles: result.count != 0 ? result.roles.map(role => role.name) : []
                        };
                    });
                    console.log(user);
                }
            });
    }, []);


    return (
        <UserInfoContext.Provider value={{ user, registerUserCurrent }}>
            {children}
        </UserInfoContext.Provider>
    );
};

function useUserInfo(): IUserInfoContextState {
    const context = useContext(UserInfoContext);
    return context;
}

export { UserInfoContext, UserInfoProvider, useUserInfo };