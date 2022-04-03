import { axiosPrivate } from '../api/axios';
import useContextAPI from './useContextAPI';

const useRefreshToken = () => {
    const {setAuth} = useContextAPI();
    const refresh = async () => {
        try {
            const response = await axiosPrivate.get('/api/refresh');
            // console.log(response.data.token);
            setAuth(prev =>  {
                return {...prev, token: response.data.token};
            })
            return response.data.token;
        } catch (error) {
            console.log(error);
        }
    }

    return refresh;
};

export default useRefreshToken;