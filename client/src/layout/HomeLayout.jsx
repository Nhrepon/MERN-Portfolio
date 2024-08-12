import React from 'react';
import FooterComponent from '../components/FooterComponent';
import { Toaster } from 'react-hot-toast';
import TopNavigationBar from '../components/TopNavigationBar';
import Feature from '../components/feature/Feature';

const HomeLayout = (props) => {
    return (
        <div className='body'>
                    <TopNavigationBar/>
            <div className="container-fluid home-nav-bg">
                <div className="row shadow-sm sticky-md-top">
                </div>
                    <Feature/>
            </div>


            {props.children}
            <FooterComponent/>
            <Toaster position="top-center" />
        </div>
    );
};

export default HomeLayout;