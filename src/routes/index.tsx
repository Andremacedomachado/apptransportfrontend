import { Route, Routes } from 'react-router-dom';

import { Dashboard } from '../pages/dashboard/Dashboard';
import { PrivateRoute } from './PrivateRoute';
import { Login } from '../pages';

export const AppRoutes = () => {

    return (
        <Routes>
            <Route path='/' element={<Login></Login>}></Route>
            <Route element={<PrivateRoute role='funcionario'></PrivateRoute>}>
                <Route path='/dashboard' element={<Dashboard />}></Route>
            </Route>
        </Routes>
    );
};