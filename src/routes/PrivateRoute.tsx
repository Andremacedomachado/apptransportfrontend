import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '../shared/contexts/AuthContext';
import api from '../services/api/Api';


interface IPrivateRoutePropsData {
    role?: string,
}

interface IRolesResponse {
    roles: string[],
}

// eslint-disable-next-line react/prop-types
export const PrivateRoute = ({ role }: IPrivateRoutePropsData) => {
    const [permissions, setPermissions] = useState<string[] | undefined>(undefined);
    const { userLogged } = useAuth();
    useEffect(() => {
        async function loadRoles() {
            await api.get('/users/roles')
                .then(result => {
                    if (result.data instanceof Error) {
                        alert('erro derequesição');

                    }
                    const dados: IRolesResponse = result.data;
                    const findRole = dados.roles.find((r: string) => r === role);
                    if (findRole) {
                        setPermissions([findRole]);
                    }
                });

        }

        loadRoles();
    }, []);

    if (!userLogged()) {
        console.log('nao logado');
        return <Navigate to='/' />;
    }

    if (!role && userLogged()) {
        console.log(' logado sem roles necessaria');
        return <Outlet />;
    }

    if (!permissions) {
        console.log('Sem permissao');
        return null;
    }
    console.log('Permissão concedida');
    return <Outlet />;
};
