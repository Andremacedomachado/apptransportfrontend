import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Login } from '../pages';

export const AppRoutes = () => {

    return (<BrowserRouter>
        <Routes>
            <Route path='/' element={<Login></Login>}></Route>
        </Routes>
    </BrowserRouter>);
};