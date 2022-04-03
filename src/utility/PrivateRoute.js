import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useContextAPI from '../hooks/useContextAPI';

const PrivateRoute = () => {
    const {auth} = useContextAPI();
    const location = useLocation();
    // console.log(location);
    return <>
        {
            auth?.token ? <Outlet/> : <Navigate to='/login' state={{from: location}} replace/>
        }
    </>;
};

export default PrivateRoute;