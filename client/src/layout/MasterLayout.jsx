import React from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import FooterComponent from '../components/FooterComponent';
import {Toaster} from 'react-hot-toast';


const MasterLayout = (props) => {



    return (
        <div className='body'>
            <TopNavigationBar/>
            {props.children}
            <FooterComponent/>
            <Toaster position="top-center" />
        </div>
    );
};

export default MasterLayout;