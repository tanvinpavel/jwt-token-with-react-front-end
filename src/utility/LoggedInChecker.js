import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useContextAPI from '../hooks/useContextAPI';

const LoggedInChecker = () => {
    const {auth} = useContextAPI();
    const location = useLocation();
    console.log(auth.token);
    return (
        <>
            {
                !auth?.token ? <Outlet/> : <Navigate to='/' />
            }
        </>
    );
};

export default LoggedInChecker;