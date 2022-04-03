import React, { useState } from 'react';
import useRefreshToken from '../../hooks/useRefreshToken';

const About = () => {
    const refresh = useRefreshToken();
    const [token, setToken] = useState(null);

    const tokenHandler = async () => {
        const newToken = await refresh();
        setToken(newToken);
    }
    return (
        <div className='page-body'>
            <div>
                <h1>this is about page</h1>
                <button onClick={()=>tokenHandler()}>Create a new access token</button>
                <br />
                {token && token}
            </div>
        </div>
    );
};

export default About;