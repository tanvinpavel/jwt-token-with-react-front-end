import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Layout = () => {
    return (
        <>  
            <Header/>
            <main className='page-body'>
                <Outlet/>
            </main>
            <Footer/>
        </>
    );
};

export default Layout;