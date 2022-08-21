import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const AppRoutes = () => {

    return (<BrowserRouter>
        <Routes>
            <Route path='/' element={<p> Testing routes</p>}></Route>
        </Routes>
    </BrowserRouter>);
};