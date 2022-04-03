import './header.css';
import { Link, useNavigate } from 'react-router-dom';
import useContextAPI from '../../hooks/useContextAPI';
import useLogout from '../../hooks/useLogout';

const Header = () => {
    const {auth} = useContextAPI();
    const logout = useLogout();
    const navigate = useNavigate();

    const logoutHandler = async () => {
        await logout();
        navigate('/login');
    }
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/order'>Order</Link>
            <Link to='/product'>Product</Link>
            <Link to='/about'>About</Link>
            {
                !auth?.token ? <Link to='/login'>Login</Link> : <button onClick={logoutHandler}>Logout</button>
            }
        </nav>
    );
};
export default Header;