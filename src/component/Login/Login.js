import { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from '../../api/axios';
import useContextAPI from '../../hooks/useContextAPI';
import './login.css';

const Login = () => {
    const inputUsername = useRef();
    const inputPassword = useRef();
    const {setAuth} = useContextAPI();

    //redirect
    const location = useLocation();
    const navigate = useNavigate();

    const from = location?.state?.from?.pathname || '/';

    const formHandler = async (e) => {
        e.preventDefault();
        const payload = { 
            username: inputUsername.current.value, 
            password: inputPassword.current.value,
        };

        try {
            const response = await axios.post('/api/login', payload, {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            });

            // console.log(response.data);
            setAuth(response.data);
            navigate(from, {replace: true});
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='page-body'>
            <form className='login-form' onSubmit={formHandler}>
                <div>
                    <label htmlFor="username">Username</label>
                    <br />
                    <input ref={inputUsername} type="text" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <br />
                    <input ref={inputPassword} type="password" />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;