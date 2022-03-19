import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useCookies } from 'react-cookie';

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(['isLoggedIn', 'user']);

  const inputname = useRef();
  const inputpass = useRef();
  // useEffect(()=>{
  //   cookies('isLoggedIn', false)
  // }, [])

  const handleDatapass = () => {
    const username = inputname.current.value;
    const password = inputpass.current.value;

    //login
    axios.post(`http://localhost:9050/auth/login`, {
      username, password
    })
      .then(res => {
        setUser(res.data)
        setCookie('user', res.data);
        setCookie('isLoggedIn', true);
      });
  }

  const deleteHandler = (id) => {
    setError(false);
    setSuccess(false);
    axios.delete(`http://localhost:9050/delete/${id}`, {
      headers: { Authorization: `Bearer ${cookies.user.accessToken}`}
    })
      .then(res => setSuccess(res))
      .catch(err => setError(true))
  }

  const logoutHandler = () => {
    setError(false);
    setSuccess(false);
    // console.log(cookies.user.accessToken, cookies.user.refreshToken);
    axios.post(`http://localhost:9050/logout`, { token: cookies.user.refreshToken}, {
      headers: { Authorization: `Bearer ${cookies.user.accessToken}`}
    })
      .then(res => {
        removeCookie('isLoggedIn');
        removeCookie('user');
      })
  }

  return (
    <>
      {
        !cookies.isLoggedIn ? <div>
          <input ref={inputname} type="text" placeholder="plese enter your name" />
          <input ref={inputpass} type="number" placeholder="plese enter your pass" />
          <button onClick={handleDatapass} >click</button>
        </div> : <div>
          <button onClick={()=>logoutHandler()}>Logout</button>
          <h4>{`Welcome to the the ${cookies.user.role} dashboard ${cookies.user.username}`}</h4>
          <button onClick={()=>deleteHandler(1)}>Delete pavel</button>
          <button onClick={()=>deleteHandler(2)}>Delete tanvir</button>

          {error && <h4>you are not allow to delete this user</h4>}
          {success && <h4>{success.data}</h4>}
        </div>
      }
    </>
  )
}

export default App;