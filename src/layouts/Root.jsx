import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';
import Spinner from '../pages/Spinner';
const Root = () => {
    const navigation = useNavigation()
    console.log(navigation);

    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>
            <div className='flex-1 bg-[#E9E9E9]'>
                <Outlet></Outlet>

            </div>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Root;