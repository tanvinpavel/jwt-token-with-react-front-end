import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import useContextAPI from '../../hooks/useContextAPI';
import useRefreshToken from '../../hooks/useRefreshToken';

const PersistenceLogin = () => {
    const [isLoading, setIsLoading] = useState(true);
    const {auth} = useContextAPI();
    const token = useRefreshToken();

    useEffect(()=>{
        const verifyAccessToken = async () => {
            try {
                await token();
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }
        
        !auth?.token ? verifyAccessToken() : setIsLoading(false);
    },[auth?.token, token]);

    return (
        <>
         {
             isLoading ? <div className='page-body'><p>Loading...</p></div> : <Outlet/>
         }   
        </>
    );
};

export default PersistenceLogin;