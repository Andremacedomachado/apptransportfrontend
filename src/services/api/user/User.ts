import api from '../Api';
import { ApiException } from '../ApiException';
interface IRecordRoles {
    name: string,
    roleId: string,
    createdAt: Date,
    updatedAt: Date,
}

interface IUserRolesResponse {
    roles: IRecordRoles[],
    count: number
}

interface IUserResponse extends IUserRolesResponse {
    id: string,
    name: string,
    email: string,
    createdAt: Date,
    updatedAt: Date,

}
export const getByEmail = async (email: string): Promise<IUserResponse | ApiException> => {
    const fullUrl = `/users/${email}`;
    try {
        const { data } = await api.get(fullUrl);
        return data;
    } catch (error: any) {
        return new ApiException(error.message || 'Error ao buscar registro');
    }
};