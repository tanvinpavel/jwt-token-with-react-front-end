import { useEffect } from 'react';
import { axiosPrivate } from '../api/axios';
import useContextAPI from './useContextAPI';
import useRefreshToken from './useRefreshToken';

const useAxiosPrivate = () => {

    const {auth} = useContextAPI();
    const refresh = useRefreshToken();

    useEffect(()=>{

        const requestIntercept = axiosPrivate.interceptors.request.use(config => {
            if(!config?.headers['Authorization']){
                config.headers['Authorization'] = `Bearer ${auth?.token}`;
            }
            return config;
        }, error => Promise.reject(error));

        const responseIntercept = axiosPrivate.interceptors.response.use(response => response, async (error) => {
            const prevReq = error.config;

            if(error?.response?.status === 403 && !prevReq?.sent){
               prevReq.sent = true;
               const newToken = await refresh();

               prevReq.headers['Authorization'] = `Bearer ${newToken}`;
               return axiosPrivate(prevReq);
            }

            return Promise.reject(error);
        })


        return () => {
            axiosPrivate.interceptors.request.eject(requestIntercept);
            axiosPrivate.interceptors.response.eject(responseIntercept);
        }
    },[auth?.token, refresh]);

    return axiosPrivate;
};

export default useAxiosPrivate;