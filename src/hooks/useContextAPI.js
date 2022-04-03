import { useContext } from 'react';
import { LoginContext } from '../context/ContextAPI';

const useContextAPI = () => {
    return useContext(LoginContext);
};

export default useContextAPI;