import { useCallback, useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '../shared/contexts/AuthContext';
import api from '../services/api/Api';
import { useUserInfo } from '../shared/contexts/UserInfoContext';


interface IPrivateRoutePropsData {
    roleRequirement?: string,
}

interface IRoleResponse {
    roleId: string,
    name: string,
    createdAt?: Date,
    updatedAt?: Date,
}
interface IRolesResponse {
    roles: IRoleResponse[],
    count: number
}

// eslint-disable-next-line react/prop-types
export const PrivateRoute = ({ roleRequirement }: IPrivateRoutePropsData) => {

    const { userLogged } = useAuth();
    const { user } = useUserInfo();

    if (!roleRequirement && userLogged()) {
        return (<Outlet />);
    }
    else {
        if (!userLogged()) {
            return (<Navigate to='/' />);
        }
        const matchRoleExist = user.roles.includes(roleRequirement as string);

        if (matchRoleExist) {
            return (<Outlet />);
        }
        else {
            return (<Navigate to='/' />);
        }
    }
};
